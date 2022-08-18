import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
        constructor(props) {
            super(props);
            this.state = {
                dishes: [
                    {
                        id: 0,
                        name:'Uthappizza',
                        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
                        category: 'mains',
                        label:'Hot',
                        price:'4.99',
                        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                     {
                        id: 1,
                        name:'Zucchipakoda',
                        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
                        category: 'appetizer',
                        label:'',
                        price:'1.99',
                        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                     {
                        id: 2,
                        name:'Vadonut',
                        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        category: 'appetizer',
                        label:'New',
                        price:'1.99',
                        description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                    {
                        id: 3,
                        name:'ElaiCheese Cake',
                        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                        category: 'dessert',
                        label:'',
                        price:'2.99',
                        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
                    ],
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="mt-5 col-12">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;
