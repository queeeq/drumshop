import {useState} from "react";
import {Card, CardContent, CardMedia, IconButton, TextField, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";


ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        material: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
    handleDeleteProduct: PropTypes.func.isRequired,
    handleEditProduct: PropTypes.func.isRequired,
};

function ProductCard({product, handleDeleteProduct, handleEditProduct}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        name: product.name,
        material: product.material,
        length: product.length,
        price: product.price,
    });

    const handleSaveChanges = async () => {
        try {
            handleEditProduct(product.id, editedProduct);
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving changes:', error.message);
        }
    };

    return (
        <Card>
            <CardMedia component="img" height="500" image={product.imageUrl} alt={product.name}/>
            <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                {isEditing ? (
                    <>
                        <TextField
                            label="Name"
                            value={editedProduct.name}
                            onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
                            margin="normal"
                        />
                        <TextField
                            label="Material"
                            value={editedProduct.material}
                            onChange={(e) => setEditedProduct({...editedProduct, material: e.target.value})}
                            margin="normal"
                        />
                        <TextField
                            label="Length"
                            value={editedProduct.length}
                            onChange={(e) => setEditedProduct({...editedProduct, length: e.target.value})}
                            margin="normal"
                        />
                        <TextField
                            label="Price"
                            value={editedProduct.price}
                            onChange={(e) => setEditedProduct({...editedProduct, price: e.target.value})}
                            margin="normal"
                        />
                        <IconButton onClick={handleSaveChanges} aria-label="save">
                            <SaveIcon/>
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.material}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            length: {product.length}
                        </Typography>
                        <Typography variant="h6" component="div" marginTop="10px">
                            ${product.price}
                        </Typography>
                        <div style={{flex: 1}}/>
                        <IconButton onClick={() => setIsEditing(true)} aria-label="edit" style={{marginRight: '8px'}}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton onClick={() => handleDeleteProduct(product.id)} aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>
                    </>
                )}
            </CardContent>
        </Card>
    );
}

export default ProductCard;