import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@mui/material';




let categories=[{id:1,name:"Kids book1"},{id:2,name:"kids book2"},{id:3, name:"kids book 3"}]

//Defining our yup validation
const FormSchema=Yup.object(
    {
        name:Yup.string().required(),
        desc:Yup.string().required(),
        price:Yup.string().matches(/^\d+(\.\d{1,2})?$/, "Must be a Valid Price").required(),
        img:Yup.string().required(),
        category_id:Yup.number().integer().required()
    }
)



export default function ItemForm({ item 
    // =    {id:1,
    //             name:"item1",
    //             desc:'my test item',
    //             category_id:3,
    //             price:9.99,
    //             img:'my-image.png'}
}
                
                ){
    
    const initialValues={
        name:item?.name ?? '',
        desc:item?.desc ?? '',
        price:item?.price ?? '',
        img:item?.img ?? '',
        category_id:item?.category_id??0
    }
    
    const handleSubmit=(values, resetForm)=>{
        if (item){
            console.log('Editing Item')
        }else{
            console.log('Creating item')
        }
        console.log(values)
        resetForm(initialValues)
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="title"
                name="title"
                fullWidth
                sx={{mb:2, mt:2}}
                label="title"
                placeholder="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}            
            />
            <TextField
                id="author"
                name="author"
                fullWidth
                sx={{mb:2}}
                label="author"
                placeholder="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                error={formik.touched.author && Boolean(formik.errors.author)}
                helperText={formik.touched.author && formik.errors.author}            
            />
            <TextField
                id="pages"
                name="pages"
                fullWidth
                sx={{mb:2}}
                label="pages"
                placeholder="pages"
                value={formik.values.pages}
                onChange={formik.handleChange}
                error={formik.touched.pages && Boolean(formik.errors.pages)}
                helperText={formik.touched.pages && formik.errors.pages}            
            />
            <TextField
                id="img"
                name="img"
                fullWidth
                sx={{mb:2}}
                label="Image URL"
                placeholder="img"
                value={formik.values.img}
                onChange={formik.handleChange}
                error={formik.touched.img && Boolean(formik.errors.img)}
                helperText={formik.touched.img && formik.errors.img}            
            />
            <TextField
                id="summary"
                name="summary"
                fullWidth
                sx={{mb:2}}
                label="summary"
                placeholder="summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
                error={formik.touched.summary && Boolean(formik.errors.summary)}
                helperText={formik.touched.summary && formik.errors.summary}            
            />
            <FormControl fullWidth>
                <InputLabel id="category-label-id">Category</InputLabel>
                <Select
                    labelId="category-label-id"
                    id="category-id"
                    value={formik.values.category_id}
                    name="category_id"
                    placeholder="Category"
                    label="Category"
                    onChange={formik.handleChange}
                    error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                >
                    <MenuItem value={0}><em>None</em></MenuItem>

                {categories.map((category)=>(
                    <MenuItem key={category.id} value={category.id}>{category.name} | {category.id}</MenuItem>
                )
                )}
                </Select>
                <FormHelperText>{formik.touched.category_id && formik.errors.category_id}</FormHelperText>
            </FormControl>
            <Button type="submit" sx={{width:"100%"}}>{item?"Edit Item":"Create Item"}</Button>
        </form>
    )

}