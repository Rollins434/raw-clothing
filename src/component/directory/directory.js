import React from 'react'
import MenuItem from '../menu-item/menu-item';
import './directory.scss'

class Directory extends React.Component {
    constructor(){
        super();
        
        this.state= {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1552783858-1e47edf7898b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    size: 'large',
                    id: 5
                  }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(
                      ({title,imageUrl,id,size} ) => (
                          <MenuItem title ={title} key = {id} imageUrl = {imageUrl} size={size}/>
                      )
                  )
                }
                </div>
        )
    }
}


export default Directory;