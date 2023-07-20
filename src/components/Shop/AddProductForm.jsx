import React, {useState} from 'react';

const AddProductForm = ({onAddProduct}) => {
    const [formData, setFormData] = useState({
        name: '',
        material: '',
        length: '',
        price: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: generateUniqueId(), // Dodajemy unikalny ID do nowego produktu
            ...formData,
        };
        onAddProduct(newProduct);
        setFormData({
            name: '',
            material: '',
            length: '',
            price: '',
        });
    };

    // Funkcja do generowania unikalnego ID (można zastosować różne metody, tutaj używamy prostej implementacji)
    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.formContainer}>
                <label style={styles.formLabel}>
                    <span style={styles.labelText}>Name:</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.formInput}
                    />
                </label>
                <label style={styles.formLabel}>
                    <span style={styles.labelText}>Material:</span>
                    <input
                        type="text"
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        style={styles.formInput}
                    />
                </label>
                <label style={styles.formLabel}>
                    <span style={styles.labelText}>Length:</span>
                    <input
                        type="text"
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        style={styles.formInput}
                    />
                </label>
                <label style={styles.formLabel}>
                    <span style={styles.labelText}>Price:</span>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        style={styles.formInput}
                    />
                </label>
                <button type="submit" style={styles.formButton}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;


// Styles
const styles = {
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
        padding: '16px',
    },
    formLabel: {
        marginBottom: '8px',
        color: 'white',
    },
    labelText: {
        marginRight: '8px',
    },
    formInput: {
        padding: '4px 8px',
        marginBottom: '16px',
    },
    formButton: {
        padding: '8px 16px',
        backgroundColor: '#2F8E55',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        fontSize: '16px',
        textDecoration: 'none',
        margin: '10px',
    },
    formButton2: {
        padding: '8px 16px',
        backgroundColor: '#953244',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        fontSize: '16px',
        textDecoration: 'none',
        margin: '10px',
    },
};