import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/Image1.jpeg'
const Portfolio = () => {
  
    const data=[
      {id:1,
      image:img1,
      title:'title',
      github:'https://github.com/Tanmoy001/Text-Modifier',
      demo:'https://635f909c1beb547f6300e782--dapper-sopapillas-8765b6.netlify.app/'
    },
    {id:2,
      image:img1,
      title:'title',
      github:'https://github.com/Tanmoy001/Text-Modifier',
      demo:'https://635f909c1beb547f6300e782--dapper-sopapillas-8765b6.netlify.app/'
    },
    {id:3,
      image:img1,
      title:'title',
      github:'https://github.com/Tanmoy001/Text-Modifier',
      demo:'https://635f909c1beb547f6300e782--dapper-sopapillas-8765b6.netlify.app/'
    }
    ]
    return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container protfolio_container'>
        { data.map(({id, image, title, github, demo})=>{
          return(
        <div key={id}className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={image}alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </div>
          )
      })}
        </div>
      
    </section>
  )
}

export default Portfolio
