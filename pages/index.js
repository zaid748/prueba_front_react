import {useEffect, useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function HomePage(){
  const [title1, setTitle1] = useState("Toumaline & Ecualyptus Bar Soap");
  const [title2, setTitle2] = useState("Toumaline & Argan Oil Bar Soap");
  const [title3, setTitle3] = useState("Toumaline & Tea Tree Bar Soap");
  const [title4, setTitle4] = useState("Toumaline & Unscented Bar Soap");
  const [title5, setTitle5] = useState("Toumaline & Tea Tree Bar Soap");
  const [title6, setTitle6] = useState("Toumaline & Unscented Bar Soap");
  const [title7, setTitle7] = useState("Toumaline & Unscented Bar Soap");
  const [selectTitle, setSelectTitle] = useState(Number);
  const [presio, setPresio] = useState(12.00);
  const [Cantidad1, setCantidad1] = useState(Number);
  const [Cantidad2, setCantidad2] = useState(Number);
  const [Cantidad3, setCantidad3] = useState(Number);
  const [Cantidad4, setCantidad4] = useState(Number);
  const [Cantidad5, setCantidad5] = useState(Number);
  const [Cantidad6, setCantidad6] = useState(Number);
  const [Cantidad7, setCantidad7] = useState(Number);

  
  useEffect(()=>{
    //cambiarFuente()
  }, []);
  const cambiarTitulo = (title)=>{
    try {
      const titulo = document.getElementById('titulo');
      switch(title){
        case '1':
          setTitle1(titulo.value);
          break
        case '2':
          
          setTitle2(titulo.value);
          break
        case '3':
          
          setTitle3(titulo.value);
          break
        case '4':
          
          setTitle4(titulo.value);
          break
        case '5':
          
          setTitle5(titulo.value);
          break
        case '6':
          setTitle6(titulo.value);
          break
        case '7':
          setTitle7(titulo.value);
        break
      }
    } catch (error) {
      console.log(error);
    }
  }

  const cambiarFuente = ()=>{
    const element = document.getElementsByClassName('fuente');
    /* const num = Fuente+1
    setFuente(num) */
    const Size = document.getElementById('SizeFuente');
    for (let i = 0; i < element.length; i++) {
      element[i].style.fontSize = `${Size.value}px`
    }
  }
  
  const addProduct = (num)=>{
    try {
      switch(num){
        case 1:
          const product1 = Cantidad1+1;
          
          setCantidad1(product1);
          break
        case 2:
          const product2 = Cantidad2+1;
          
          setCantidad2(product2);
          break
        case 3:
          const product3 = Cantidad3+1;
          
          setCantidad3(product3);
          break
        case 4:
          const product4 = Cantidad4+1;
          
          setCantidad4(product4);
          break
        case 5:
          const product5 = Cantidad5+1;
          
          setCantidad5(product5);
          break
        case 6:
          const product6 = Cantidad6+1;
          setCantidad6(product6);
          break
        case 7:
          const product7 = Cantidad7+1;
          setCantidad7(product7);
        break
      }
    } catch (error) {
      console.log(error);
    }
  };

  return(
    
    <div className={styles.secion}>
      <Head>
        <title>Zaid Nevarez</title>
      </Head>
      <div className={styles.caja}>
        <div className={styles.item1}>
          <img src="item1.jpg" alt="" width={200}/>
          <h3 className='fuente'>{title1}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad1}</span>
            <span className={styles.num}>{Cantidad1}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 1)}>Add to cart</button>
        </div>
        <div className={styles.item2}>
          <img src="item2.png" alt="" width={200}/>
          <h3 className='fuente'>{title2}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad2}</span>
            <span className={styles.num}>{Cantidad2}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 2)}>Add to cart</button>
        </div>
        <div className={styles.item3}>
          <img src="item3.png" alt="" width={200}/>
          <h3 className='fuente'>{title3}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad3}</span>
            <span className={styles.num}>{Cantidad3}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 3)}>Add to cart</button>
        </div>
        <div className={styles.item4}>
          <img src="item4.png" alt="" width={200}/>
          <h3 className='fuente'>{title4}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad4}</span>
            <span className={styles.num}>{Cantidad4}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 4)}>Add to cart</button>
        </div>
        <div className={styles.item5}>
          <img src="item5.jpg" alt="" width={200}/>
          <h3 className='fuente'>{title5}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad5}</span>
            <span className={styles.num}>{Cantidad5}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 5)}>Add to cart</button>
        </div>
        <div className={styles.item6}>
          <img src="item6.jpg" alt="" width={200}/>
          <h3 className='fuente'>{title6}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad6}</span>
            <span className={styles.num}>{Cantidad6}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 6)}>Add to cart</button>
        </div>
        <div className={styles.item7}>
          <img src="item7.jpg" alt="" width={200}/>
          <h3 className='fuente'>{title7}</h3>
          <div className={styles.ohFlex}>
            <span className={styles.pesio}>${presio*Cantidad7}</span>
            <span className={styles.num}>{Cantidad7}</span>
          </div>
          <p className={styles.parafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, laboriosam debitis, quod maiores quibusdam quam autem soluta distinctio vero a nisi voluptatum rerum dolores illo officia eos quas delectus voluptatem.</p>
          <button className={styles.button}
          onClick={addProduct.bind(null, 7)}>Add to cart</button>
        </div>
      </div>
      <div className={styles.contect}>
        <h4>Cambia el tamaño de los titulos ingresa el tamaño del pixel</h4>
        <input type="number" onChange={cambiarFuente} id="SizeFuente"/>
      </div>
      <div className={styles.contect}>

        <div className={styles.inputForm}>
          <h2>Catidad total de productos seleccionados</h2>
          <span><strong>{Cantidad1+Cantidad2+Cantidad3+Cantidad4+Cantidad5+Cantidad6+Cantidad7}</strong></span>
        </div>
        <h2>Si desea cambiar el titulo de algun produncto envie la siguiente informacion</h2>
        <div className={styles.inputForm}>
          <label className={styles.labelForm}>Elija el titulo</label>
          <select 
          value={selectTitle}
          onChange={e=> setSelectTitle(e.target.value)}
          className={styles.selectForms} type="text">
              <option disabled="">seleccionar</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
          </select>
          {selectTitle &&
            <div className={styles.inputForm}>
              <label className={styles.labelForm}>Titulo</label>
              <input
              id='titulo'
              className={styles.inputRound} 
              onChange={cambiarTitulo.bind(null, selectTitle)}
              type="text"
              />
            </div>
          }
      </div>
      </div>
    </div>
  )
}