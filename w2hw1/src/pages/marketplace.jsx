import * as React from 'react'
import {ShowListings} from '../components/showListings'
import { NewListingForm } from '../components/newListings';

const API_URL = 'https://ecomm-service.herokuapp.com/marketplace/'
// fetch data
const getListings = () => {
    return fetch(API_URL).then((res)=> res.json());
}

//post data
const postListings = (data) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data)
    })
}

const deleteListings = (id) => {
        return fetch(API_URL +id , {
            method: 'DELETE',
        }).then( (res) => res.json())
    }



const editListings = (id, data) => {
    console.log(id, data)
    return fetch(API_URL + id, {    
        method: 'PATCH',
        headers: { 'Content-Type' : 'application/json', },
        body: JSON.stringify(data)
    })
}

export const Marketplace = () => {

    const [ listings, setListings ] = React.useState(undefined)
    const [toLoad, setToLoad ] = React.useState(true)

    const [isEdit, setIsEdit] = React.useState(false)

    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [condition, setCondition] = React.useState('new');
    const [availability, setAvailability] = React.useState('in-stock');
    const [numOfStock, setNumOfStock] = React.useState('');
    const [id_, setId] = React.useState('');


    const inputTitleRef = React.useRef();

    const fillEditForm = (id) => {

        const listingObj = listings.filter( (list) => {
            return list._id === id
        })
        
        setId(id);
        setTitle(listingObj[0].title);
        setPrice(listingObj[0].price);
        setDescription(listingObj[0].description);
        setCondition(listingObj[0].condition);
        setAvailability(listingObj[0].availability);
        setNumOfStock(listingObj[0].numOfStock);
        
        setIsEdit(true);
    }

    const resetForm = () => {
        setTitle('');
        setPrice('');
        setDescription('');
        setCondition('new');
        setAvailability('in-stock');
        setNumOfStock('');
        setId('')
        if(inputTitleRef.current) {
            inputTitleRef.current.focus();
        }
    }

    if (toLoad) {
        getListings()
            .then((data)=> setListings(data))
            .then( () => setToLoad(false))
    }
    

    return(

        <main className=
            "bg-gray-5- lg:flex">
            <div className="flex-1">
                <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:flex-col sm:align-center mb-12">
                        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                            Marketplace
                        </h1>
                    </div>
                    <div className="
                        grid
                        md:grid-cols-2
                        gap-x-4 gap-y-8
                        xl:grid-cols-3 xl:gap-x-6
                    ">
                        {listings && listings.map( (list) => 
                            <ShowListings 

                                title = {list.title}
                                price = {list.price}
                                description = {list.description}
                                numOfStock = {list.numOfStock}
                                img = {list.imageUrl}
                                key = {list._id}
                                onDelete = {() => deleteListings(list._id).then(setToLoad(true))}
                                onEdit = {() => fillEditForm(list._id)}
                            />
                        )}

                
                    </div>
                </div>
            </div>
            <div className="
                flex-initial
                bg-white
                w-full
                lg:max-w-md
                border-b border-gray-100
                ">
                <NewListingForm 
                    editListings = {()=> {
                        if (title !==  '' && description !== '' &&
                            Number(numOfStock) > 0 && Number(price) > 0) {
                                editListings(id_, {
                                    title: title,
                                    condition: condition,
                                    description: description,
                                    availability: availability,
                                    numOfStock: Number(numOfStock),
                                    price: Number(price),
                                    imageUrl: 'https://i.insider.com/56e9d825dd08955e388b4637?width=1200&format=jpeg'
                                }).then( () => {
                                    resetForm();
                                    setToLoad(true)})
                            }
                    }}
                    postListings = {()=> {
                        if (title !==  '' && description !== '' &&
                            numOfStock !== '' && Number(price) > 0) {
                                postListings({
                                    title: title,
                                    condition: condition,
                                    description: description,
                                    availability: availability,
                                    numOfStock: Number(numOfStock),
                                    price: Number(price),
                                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png'
                                }).then( () => {
                                    resetForm();
                                    setToLoad(true)})
                            }
                    }}
                    inputTitleRef = {inputTitleRef}
                    title = {title}
                    setTitle = {setTitle}
                    condition = {condition}
                    setCondition = {setCondition}
                    description = {description}
                    setDescription = {setDescription}
                    availability = {availability}
                    setAvailability = {setAvailability}
                    numOfStock = {numOfStock}
                    setNumOfStock = {setNumOfStock}
                    price = {price}
                    setPrice = {setPrice}
                    resetForm = {resetForm}
                    isEdit = {isEdit}
                    setIsEdit = {setIsEdit}
                />

            </div>
        </main>
                
    )
}
    
