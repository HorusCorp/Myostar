import React from 'react'
import './HomeStructure.css'

function HomeStructure() {
    return (
        <div>
            <img  src='../../banner.jpg' alt=''></img>
            <div style={{display:'flex',width:'100%',boxSizing:'border-box',paddingTop:125,paddingBottom:125,paddingLeft:100,paddingRight:200,backgroundColor:'white'}}>
                <div style={{width:'40%',display:'flex',alignItems:'center',justifyContent:'center'}}>LOGO MYOSTAR</div>
                <div style={{width:'60%'}}>
                    <div className='text_home'>Vous voulez mieux nous connâitre ? Qui nous sommes ? Quels types de matériels nous fournissons ?</div>
                    <div className='button_home'>En savoir plus</div>
                </div>
            </div>
            <div className='second_home_zone'>
                <div className='expanding__card'>
                    <div className='expanding__card__imgBox'>
                        <img 
                            src='../../img1.jpg'
                            alt=''
                            width='260px'
                            height='200px'
                        />
                    </div>
                    <div className='expanding__card__content'>
                        <h2>Musculation</h2>
                        <div className='expanding__card__content_separator'></div>
                        <p> Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className='expanding__card'>
                    <div className='expanding__card__imgBox'>
                        <img 
                            src='../../img2.jpg'
                            alt=''
                            width='260px'
                            height='200px'
                        />
                    </div>
                    <div className='expanding__card__content'>
                        <h2>Cardio</h2>
                        <div className='expanding__card__content_separator'></div>
                        <p> Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className='expanding__card'>
                    <div className='expanding__card__imgBox'>
                        <img 
                            src='../../img4.jpg'
                            alt=''
                            width='260px'
                            height='200px'
                        />
                    </div>
                    <div className='expanding__card__content'>
                        <h2>Réeducation</h2>
                        <div className='expanding__card__content_separator'></div>
                        <p> Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>
            <div className='footer' style={{backgroundColor:'black',height:'400px'}}>

            </div>
            
        </div>
    )
}

export default HomeStructure
