import './Home.css'
import img1 from '../../assets/img/img1.svg'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='container'>
        <div className='row no-gutters row-container'>
          <div className='col-12 col-md-6 home-text-container'>
            <h1>Space X</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              cupiditate.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus earum necessitatibus minus explicabo architecto numquam
              quos neque dolore unde. Repudiandae eos nemo exercitationem nobis
              vero incidunt et eum molestiae cumque.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-container'>
        <img src={img1} alt='welcome-img' />
      </div>
    </div>
  )
}

export default Home
