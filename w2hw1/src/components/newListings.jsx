export const NewListingForm = (props) => {

    return (
        <form className="flex flex-col h-full"
            onSubmit = {(ev)=>{
                ev.preventDefault();
                if (props.isEdit){props.editListings();} 
                    else {props.postListings();}
                
            }}>
            <div className="py-6 px-4 bg-pink-700 sm:px-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-white">New Listing</h2>
                </div>
                <div className="mt-1">
                    <p className="text-sm text-pink-300">
                    Get started by filling in the information below to create your
                    new listing.
                    </p>
                </div>
            </div>
            <div className="px-4 sm:px-6 pb-12">
                <div className="space-y-6 pt-6 pb-5">
                    <div>
                        <label htmlFor="listing-title" className="block text-sm font-medium text-gray-900">
                            Title
                        </label>
                        <div className="mt-1">
                            <input type="text" name="listing-title" id="listing-title" required="" className="
                                block
                                w-full
                                shadow-sm
                                sm:text-sm
                                focus:ring-pink-500 focus:border-pink-500
                                border-gray-300
                                rounded-md"
                                ref = {props.inputTitleRef}
                                value = {props.title}
                                onChange = {(e) => {props.setTitle(e.target.value)}}
                                />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="listing-price" className="block text-sm font-medium text-gray-900">
                            Price
                        </label>
                        <div className="mt-1">
                            <input type="number" name="listing-price" id="listing-price" required="" className="
                                block
                                w-full
                                shadow-sm
                                sm:text-sm
                                focus:ring-pink-500 focus:border-pink-500
                                border-gray-300
                                rounded-md"
                                value = {props.price}
                                onChange = {(e) => {props.setPrice(e.target.value)}}
                                />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                            Description
                        </label>
                        <div className="mt-1">
                            <textarea id="description" name="description" rows="4" required="" className="
                                block
                                w-full
                                shadow-sm
                                sm:text-sm
                                focus:ring-pink-500 focus:border-pink-500
                                border border-gray-300
                                rounded-md"
                                value = {props.description}
                                onChange = {(e) => {props.setDescription(e.target.value)}}
                                ></textarea>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="listing-condition" className="block text-sm font-medium text-gray-900">
                            Condition
                        </label>
                        <div className="mt-1">
                            <select id="listing-condition" name="listing-condition" required="" className="
                                block
                                w-full
                                pl-3
                                pr-10
                                py-2
                                text-base
                                border-gray-300
                                focus:outline-none
                                focus:ring-pink-500
                                focus:border-pink-500
                                sm:text-sm
                                rounded-md"
                                value = {props.condition}
                                onChange = {(e) => {props.setCondition(e.target.value)}}
                                >
                            <option value="new">New</option>
                            <option value="used_like-new">Used (like new)</option>
                            <option value="used_good">Used (good)</option>
                            <option value="used_fair">Used (fair)</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="listing-availability" className="block text-sm font-medium text-gray-900">
                            Availability
                        </label>
                        <div className="mt-1">
                            <select id="listing-availability" name="listing-availability" required="" className="
                                block
                                w-full
                                pl-3
                                pr-10
                                py-2
                                text-base
                                border-gray-300
                                focus:outline-none
                                focus:ring-pink-500
                                focus:border-pink-500
                                sm:text-sm
                                rounded-md"
                                value = {props.availability}
                                onChange = {(e) => {props.setAvailability(e.target.value)}}
                                >
                            <option value="in-stock">In Stock</option>
                            <option value="single-item">Single Item</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="num-of-stock" className="block text-sm font-medium text-gray-900">
                            Number of Available Stock
                        </label>
                        <div className="mt-1">
                            <input type="number" name="num-of-stock" id="num-of-stock" required="" className="
                                block
                                w-full
                                shadow-sm
                                sm:text-sm
                                focus:ring-pink-500 focus:border-pink-500
                                border-gray-300
                                rounded-md"
                                value = {props.numOfStock}
                                onChange = {(e) => {props.setNumOfStock(e.target.value)}}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="
                flex-shrink-0
                px-4
                py-4
                flex
                justify-end
                border-t border-gray-200
            ">
                {props.isEdit ? 
                    <button 
                        type='button' className="
                            ml-4
                            inline-flex
                            justify-center
                            py-2
                            px-4
                            border border-transparent
                            shadow-sm
                            text-sm
                            font-medium
                            rounded-md
                            text-white
                            bg-pink-600
                            hover:bg-pink-700
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-pink-500"
                        onClick = {(ev) => {
                            ev.preventDefault();
                            props.resetForm();
                            props.setIsEdit(false);
                        }}> Clear Form </button> : ''}
                

                <button type="submit" className="
                    ml-4
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-pink-600
                    hover:bg-pink-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-pink-500
                    ">
                    {props.isEdit ? 'Update Info' : 'ADD New'}
                </button>
            </div>
        </form>
            
    )
    
}
