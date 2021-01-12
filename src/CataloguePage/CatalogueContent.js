import React,{useEffect, useState} from 'react'
import ProductCard from '../Components/ProductCard'
import '../Components/ProductCard.css'

function CatalogueContent() {

    var displayList;
    const [listToDisplay,setListToDisplay] = useState(1)
    useEffect(() => {
        
    }, [displayList])

    var productList = [
        {url:'../../img1.jpg', name:'Mantanice Free Strength Trainer',price:'1340€ HT', brand:'Myostar',reference:'TS200', category:'Myostar',weight:'145', desc:'1820*1540*2130'},
        {url:'../../img2.jpg', name:'Multi Function Squat Rack',price:'1460€ HT', brand:'Myostar',reference:'TS103', category:'Myostar',weight:'145',  desc:'1540*1700*2322'},
        {url:'../../img3.jpg', name:'Multi Function Smith',price:'2860€ HT',reference:'TS101', brand:'Myostar', category:'Myostar',weight:'306', desc:'2050*2220*2320'},
        {url:'../../img4.jpg', name:'Multi Function Squat Rack',price:'1660€ HT',reference:'TS107', brand:'Myostar', category:'Myostar',weight:'191', desc:'1770*1710*2350'},
        {url:'../../img5.jpg', name:'Multi Function Smith',price:'3180€ HT',reference:'TS100', brand:'Myostar', category:'Myostar',weight:'410', desc:'2050*1470*2320'},
        {url:'../../img6.jpg', name:'Multi Function Smith',price:'3860€ HT',reference:'TS114', brand:'Myostar', category:'Myostar',weight:'384', desc:'1800*2190*2270'},
        {url:'../../img7.jpg', name:'Mantanice Free Strength Trainer',price:'2060€ HT',reference:'TS204', brand:'Myostar', category:'haltère',weight:'248', desc:'3060*2430*2225'},
        {url:'../../img8.jpg', name:'Adjustable Multi Function Bench',price:'580€ HT',reference:'TS214', brand:'Myostar', category:'Myostar',weight:'34', desc:'1660*550*880'},
        {url:'../../img9.jpg', name:'Wall Mounted Functionnal trainer',price:'1860€ HT',reference:'BG02', brand:'Myostar', category:'Myostar',weight:'156', desc:'980*110*1970'},

        {url:'../../TM/AUTRE/TM01.jpg', name:'Incline chest press',price:'1460€ HT',reference:'TM01', brand:'Myostar', category:'Myostar',weight:'147', desc:'1650*1010*1930'},
        {url:'../../TM/AUTRE/TM02.jpg', name:'Rowing Lat pull down',price:'1460€ HT',reference:'TM02', brand:'Myostar', category:'Myostar',weight:'218', desc:'1650*1550*2010'},
        {url:'../../TM/AUTRE/TM03+.jpg', name:'Seated Leg press',price:'1660€ HT',reference:'TM03+', brand:'Myostar', category:'Myostar',weight:'253', desc:'1830*1680*1520'},
        {url:'../../TM/AUTRE/TM04.jpg', name:'Seated chest press',price:'1460€ HT',reference:'TM04', brand:'Myostar', category:'Myostar',weight:'152.5', desc:'1680*1330*1850'},
        {url:'../../TM/AUTRE/TM05+.jpg', name:'Seated chest press & lat pull down',price:'1740€ HT',reference:'TM05+', brand:'Myostar', category:'Myostar',weight:'187.5', desc:'2000*1710*2010'},
        {url:'../../TM/AUTRE/TM06.jpg', name:'Incline Row',price:'1380€ HT',reference:'TM06', brand:'Myostar', category:'Myostar',weight:'165', desc:'1500*1450*1340'},
        {url:'../../TM/AUTRE/TM07+.jpg', name:'Wide chest plate',price:'1460€ HT',reference:'TM07+', brand:'Myostar', category:'Myostar',weight:'209', desc:'1175*2090*1720'},
        {url:'../../TM/AUTRE/TM08.jpg', name:'Squat Lunge',price:'1340€ HT',reference:'TM08', brand:'Myostar', category:'Myostar',weight:'143', desc:'1620*1540*870'},
        {url:'../../TM/AUTRE/TM09+.jpg', name:'Smith Machine',price:'2140€ HT',reference:'TM09+', brand:'Myostar', category:'Myostar',weight:'242', desc:'2240*1240*2270'},
        {url:'../../TM/AUTRE/TM10+.jpg', name:'Vertical Bench',price:'1020€ HT',reference:'TM10+', brand:'Myostar', category:'Myostar',weight:'181', desc:'1760*1280*1670'},
        {url:'../../TM/AUTRE/TM11+.jpg', name:'Back Extention',price:'700€ HT',reference:'TM11+', brand:'Myostar', category:'Myostar',weight:'65', desc:'1380*735*830'},
        {url:'../../TM/AUTRE/TM13+.jpg', name:'Seated DY Row',price:'1460€ HT',reference:'TM13+', brand:'Myostar', category:'Myostar',weight:'214', desc:'1550*1340*1223'},
        {url:'../../TM/AUTRE/TM14+.jpg', name:'Weight Plate Tree',price:'380€ HT',reference:'TM14+', brand:'Myostar', category:'Myostar',weight:'36.5', desc:'700*630*1050'},
        {url:'../../TM/AUTRE/TM15+.jpg', name:'Seat Incline Chest Press',price:'1460€ HT',reference:'TM15+', brand:'Myostar', category:'Myostar',weight:'150', desc:'1280*1700*1550'},
        {url:'../../TM/AUTRE/TM16+.jpg', name:'Seated Hight Row',price:'1460€ HT',reference:'TM16+', brand:'Myostar', category:'Myostar',weight:'150', desc:'1840*1530*1973'},
        {url:'../../TM/AUTRE/TM17.jpg', name:'Seated Leg Extention',price:'1460€ HT',reference:'TM17', brand:'Myostar', category:'Myostar',weight:'182', desc:'1830*1460*1480'},
        {url:'../../TM/AUTRE/TM18.jpg', name:'Horizontal Leg Curl',price:'1460€ HT',reference:'TM18', brand:'Myostar', category:'Myostar',weight:'143', desc:'1630*1350*1000'},
        {url:'../../TM/AUTRE/TM20.jpg', name:'Arm Curl',price:'940€ HT',reference:'TM20', brand:'Myostar', category:'Myostar',weight:'116', desc:'1360*800*1070'},
        {url:'../../TM/AUTRE/TM21+.jpg', name:'Shoulder Press',price:'1460€ HT',reference:'TM21+', brand:'Myostar', category:'Myostar',weight:'189', desc:'1195*800*1056'},
        {url:'../../TM/AUTRE/TM22.jpg', name:'Pull Train Machine',price:'1460€ HT',reference:'TM22', brand:'Myostar', category:'Myostar',weight:'143', desc:'1430*1880*1900'},
        {url:'../../TM/AUTRE/TM23.jpg', name:'Seated Calf Machine',price:'940€ HT',reference:'TM23', brand:'Myostar', category:'Myostar',weight:'138', desc:'1857*1040*1630'},
        {url:'../../TM/AUTRE/TM25+.jpg', name:'Low Row',price:'1460€ HT',reference:'TM25+', brand:'Myostar', category:'Myostar',weight:'198', desc:'1230*1690*1690'},
        {url:'../../TM/AUTRE/TM26+.jpg', name:'Seated Chest Press',price:'1460€ HT',reference:'TM26+', brand:'Myostar', category:'Myostar',weight:'196', desc:'1230*1880*1800'},
        {url:'../../TM/AUTRE/TM27+.jpg', name:'Out Lat Pull Down',price:'1460€ HT',reference:'TM27+', brand:'Myostar', category:'Myostar',weight:'153.5', desc:'1754*1245*2000'},
        {url:'../../TM/AUTRE/TM28.jpg', name:'Laydown Chest Press',price:'1340€ HT',reference:'TM28', brand:'Myostar', category:'Myostar',weight:'165', desc:'1785*1781*1096'},
        {url:'../../TM/AUTRE/TM29A+.jpg', name:'Seated Beceipt',price:'1340€ HT',reference:'TM29A+', brand:'Myostar', category:'Myostar',weight:'138', desc:'1481*1244*1461'},
        {url:'../../TM/AUTRE/TM31.jpg', name:'Olympic super Rack',price:'1020€ HT',reference:'TM31', brand:'Myostar', category:'Myostar',weight:'121', desc:'1800*1670*1830'},
        {url:'../../TM/AUTRE/TM34.jpg', name:'Flat Bench',price:'380€ HT',reference:'TM34', brand:'Myostar', category:'Myostar',weight:'72', desc:'1280*470*380'},

        {url:'../../TM/TM37+.png', name:'Seated Leg Extention',price:'1460€ HT',reference:'TM37+', brand:'Myostar', category:'Myostar',weight:'168', desc:'1845*1300*1057'},
        {url:'../../TM/TM38+.png', name:'Flat Olympic Bench',price:'820€ HT',reference:'TM38+', brand:'Myostar', category:'Myostar',weight:'75', desc:'1650*1270*1280'},
        {url:'../../TM/TM39+.png', name:'90 Degree Leg Press',price:'1740€ HT',reference:'TM39+', brand:'Myostar', category:'Myostar',weight:'198', desc:'1670*1280*1860'},
        {url:'../../TM/TM42.png', name:'Inclined Olympic Bench',price:'860€ HT',reference:'TM42', brand:'Myostar', category:'Myostar',weight:'86', desc:'1404*1222*1507'},
        {url:'../../TM/TM44.png', name:'Knee Up/dip',price:'940€ HT',reference:'TM44', brand:'Myostar', category:'Myostar',weight:'132', desc:'910*950*1810'},
        {url:'../../TM/TM45+.png', name:'Adjustable abdominal',price:'820€ HT',reference:'TM45+', brand:'Myostar', category:'Myostar',weight:'88', desc:'1370*580*1140'},
        {url:'../../TM/TM46.png', name:'Multi bench',price:'1180€ HT',reference:'TM46', brand:'Myostar', category:'Myostar',weight:'80', desc:'2070*1180*1270'},
        {url:'../../TM/TM48+.png', name:'Laydown Pecfly',price:'1180€ HT',reference:'TM48+', brand:'Myostar', category:'Myostar',weight:'74.5', desc:'1920*1050*880'},
        {url:'../../TM/TM50+.jpg', name:'Dumbell Rack',price:'780€ HT',reference:'TM50+', brand:'Myostar', category:'Myostar',weight:'65', desc:'2100*850*767'},
        {url:'../../TM/TM51+.png', name:'75 Degree Incline Bench',price:'460€ HT',reference:'TM51+', brand:'Myostar', category:'Myostar',weight:'53', desc:'1260*683*940'},
        {url:'../../TM/TM55.png', name:'Decline Bench',price:'860€ HT',reference:'TM55', brand:'Myostar', category:'Myostar',weight:'88', desc:'1650*680*860'},
        {url:'../../TM/TM56+.jpg', name:'Incline Pecfly',price:'1180€ HT',reference:'TM56+', brand:'Myostar', category:'Myostar',weight:'105', desc:'1620*1500*1330'},
        {url:'../../TM/TM58+.jpg', name:'Seated Delt Machine',price:'1460€ HT',reference:'TM58+', brand:'Myostar', category:'Myostar',weight:'138', desc:'1380*1210*1280'},
        {url:'../../TM/TM59+.jpg', name:'Abductor',price:'1980€ HT',reference:'TM59+', brand:'Myostar', category:'Myostar',weight:'182', desc:'1720*820*1160'},
        {url:'../../TM/TM64+.jpg', name:'Comprehensive Incline',price:'1460€ HT',reference:'TM64+', brand:'Myostar', category:'Myostar',weight:'169', desc:'2025*1845*1359'},
        {url:'../../TM/TM65+.jpg', name:'Comprehensive Decline',price:'1460€ HT',reference:'TM65+', brand:'Myostar', category:'Myostar',weight:'186', desc:'1663*1413*2308'},
        {url:'../../TM/TM66.jpg', name:'Leg Curl & Extention',price:'1460€ HT',reference:'TM66', brand:'Myostar', category:'Myostar',weight:'110', desc:'1820*1140*1390'},
        {url:'../../TM/TM67+.jpg', name:'Seated Dip',price:'1460€ HT',reference:'TM67+', brand:'Myostar', category:'Myostar',weight:'100', desc:'1699*1582*1047'},
        {url:'../../TM/TM68+.jpg', name:'Pull Over',price:'1460€ HT',reference:'TM68+', brand:'Myostar', category:'Myostar',weight:'159', desc:'1720*1660*1500'},
        {url:'../../TM/TM70.jpg', name:'Abductor B',price:'1980€ HT',reference:'TM70', brand:'Myostar', category:'Myostar',weight:'182', desc:'1600*920*1160'},
        {url:'../../TM/TM71.jpg', name:'Squat',price:'1980€ HT',reference:'TM71', brand:'Myostar', category:'Myostar',weight:'218', desc:'2450*1300*1580'},
        {url:'../../TM/TM72.jpg', name:'Abdominal',price:'1460€ HT',reference:'TM72', brand:'Myostar', category:'Myostar',weight:'175', desc:'1690*1050*1590'},
        {url:'../../TM/TM75.jpg', name:'Abdominal Board',price:'820€ HT',reference:'TM75', brand:'Myostar', category:'Myostar',weight:'76', desc:'1660*600*850'},
        {url:'../../TM/TM76.jpg', name:'Seated Shoulder Press',price:'1460€ HT',reference:'TM76', brand:'Myostar', category:'Myostar',weight:'149', desc:'1550*1050*1180'},
        {url:'../../TM/TM77+.jpg', name:'Abdominal Work Station',price:'1500€ HT',reference:'TM77+', brand:'Myostar', category:'Myostar',weight:'178', desc:'2160*910*1810'},
        {url:'../../TM/TM86.jpg', name:'Hip trainer B',price:'1660€ HT',reference:'TM86', brand:'Myostar', category:'Myostar',weight:'198', desc:'1990*1400*1060'},
        {url:'../../TM/TM87.jpg', name:'Adjustable Bench',price:'700€ HT',reference:'TM87', brand:'Myostar', category:'Myostar',weight:'88', desc:'1400*560*460'},
        {url:'../../TM/TM88+.jpg', name:'45 Degree Leg Press',price:'2140€ HT',reference:'TM88+', brand:'Myostar', category:'Myostar',weight:'258', desc:'2190*1640*1280'},
        {url:'../../TM/TM89+.jpg', name:'Roman Chair',price:'700€ HT',reference:'TM89', brand:'Myostar', category:'Myostar',weight:'139', desc:'1510*730*900'},
        {url:'../../TM/TM90.jpg', name:'Power Cage',price:'2300€ HT',reference:'TM90', brand:'Myostar', category:'Myostar',weight:'256', desc:'1963*1720*2815'},
        {url:'../../TM/TM91+.jpg', name:'45 Degree Leg Press 2 model',price:'2200€ HT',reference:'TM91+', brand:'Myostar', category:'Myostar',weight:'230', desc:'2190*1640*1280'},
        {url:'../../TM/TM92+.jpg', name:'Abdominal',price:'420€ HT',reference:'TM92+', brand:'Myostar', category:'Myostar',weight:'55', desc:'1020*560*560'},
        {url:'../../TM/TM93+.jpg', name:'Adjustable abdominal & Back Extention',price:'1460€ HT',reference:'TM93+', brand:'cardio', category:'Myostar',weight:'185', desc:'1740*1100*1127'},
        {url:'../../TM/TM94+.jpg', name:'Stand Torso',price:'460€ HT',reference:'TM94+', brand:'cardio', category:'Myostar',weight:'65', desc:'724*551*1366'},
        {url:'../../TM/TM96.jpg', name:'Barbell rack',price:'660€ HT',reference:'TM96', brand:'cardio', category:'Myostar',weight:'75', desc:'120*820*1350'},
        {url:'../../TM/TM97+.jpg', name:'Adjust Bench 3 Degree',price:'700€ HT',reference:'TM97+', brand:'réeducationr', category:'Myostar',weight:'76', desc:'1743*500*558'},
        {url:'../../TM/TM99+.jpg', name:'Roger Super Vertical Leg Press',price:'1820€ HT',reference:'TM99+', brand:'réeducation', category:'Myostar',weight:'200', desc:'1480*1630*1810'},
        {url:'../../TM/TM100+.jpg', name:'Chin Up',price:'1060€ HT',reference:'TM100', brand:'réeducation', category:'Myostar',weight:'124', desc:'1235*1211*2293'},
        {url:'../../TM/TM101+.jpg', name:'Power rack',price:'2260€ HT',reference:'TM101', brand:'réeducation', category:'Myostar',weight:'225', desc:'2817*1944*2535'},
        {url:'../../TM/TM102.jpg', name:'Power rack',price:'1820€ HT',reference:'TM102', brand:'cardio', category:'Myostar',weight:'195', desc:'1410*1503*2579'},
    ]

    if(listToDisplay === 1){
        displayList = productList.map(e =>{
            return<ProductCard url={e.url} name={e.name} price={e.price} brand={e.brand} category={e.category} desc={e.desc} weight={e.weight} reference={e.reference}/>
        })
    } else if(listToDisplay===2){
         displayList = productList.filter(e => e.brand.includes('Myostar')).map(e =>{
            return<ProductCard url={e.url} name={e.name} price={e.price} brand={e.brand} category={e.category} desc={e.desc} weight={e.weight} reference={e.reference}/>
        })
    } else if(listToDisplay===3){
        displayList = productList.filter(e => e.brand.includes('réeducation')).map(e =>{
            return<ProductCard url={e.url} name={e.name} price={e.price} brand={e.brand} category={e.category} desc={e.desc} weight={e.weight} reference={e.reference}/>
        })
    } else {
         displayList = productList.filter(e => e.brand.includes('cardio')).map(e =>{
            return<ProductCard url={e.url} name={e.name} price={e.price} brand={e.brand} category={e.category} desc={e.desc} weight={e.weight} reference={e.reference}/>
        })
    }

    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',width:'80%',marginLeft:'10%',paddingTop:55}}>
                <div  onClick={()=>setListToDisplay(1)} className='buttons__content__basic large'>Tous Nos Produits</div>
                <div  onClick={()=>setListToDisplay(2)} className='buttons__content__basic large'>Nos Produits Myostar</div>
                <div  onClick={()=>setListToDisplay(3)} className='buttons__content__basic large'>Nos Produits de Réeducation</div>
                <div  onClick={()=>setListToDisplay(4)} className='buttons__content__basic large'>Nos Produits Cardio</div>
            </div>
            <div className='cardsRow__container'>
                <div className="cards__content">
                    {displayList}
                </div>
            </div>
        </div>
    )
}

export default CatalogueContent
