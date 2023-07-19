import {createClient} from '@supabase/supabase-js';
import {useState} from "react";

const supabaseUrl = 'https://tfrtnrdhfaseykpxujlx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcnRucmRoZmFzZXlrcHh1amx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzk1NjUsImV4cCI6MjAwNDkxNTU2NX0.PUkSp9-m15JcLR2DvtA0e11k74KzzYY0ytV8ZoEhlLM';
const supabase = createClient(supabaseUrl, supabaseKey);

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
        onAddProduct(formData);
        setFormData({
            name: '',
            material: '',
            length: '',
            price: '',
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', gap: 12}}
        >
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}/>
            </label>
            <label>
                Material:
                <input
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}/>
            </label>
            <label>
                Length:
                <input
                    type="text"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price:
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </label>
            <button
                type="submit"
                style={{width: '50%', margin: 'auto'}}
            >Add Product
            </button>
        </form>
    );
};

export default AddProductForm;