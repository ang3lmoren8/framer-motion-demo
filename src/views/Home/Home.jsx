import './Home.css'
import img1 from '../../assets/img/img1.svg'
import { motion } from 'framer-motion'
import { useState } from 'react'

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.21,
      delayChildren: 0.3,
    },
  },
}

const textVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}

const imgContainerVariants = {
  initial: {
    opacity: 0,
    y: 75,
    x: 32,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.31,
      delay: 1.7,
    },
  },
}

const moveAnimationTransition = {
  type: 'spring',
  stiffness: 100,
}

const Home = () => {
  const [moveAnimation, setMoveAnimation] = useState({})

  const handleMouseMove = (e) => {
    const position = {
      x: e.pageX,
      y: e.pageY,
    }

    setMoveAnimation({
      x: position.x * -0.025,
      y: position.y * -0.031,
    })
  }

  return (
    <div className='home-container' onMouseMove={handleMouseMove}>
      <div className='container'>
        <div className='row no-gutters row-container'>
          <motion.div
            variants={containerVariants}
            className='col-12 col-md-6 home-text-container'
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <motion.h1 variants={textVariants}>Space X</motion.h1>
            <motion.h2 variants={textVariants}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              cupiditate.
            </motion.h2>
            <motion.p variants={textVariants}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus earum necessitatibus minus explicabo architecto numquam
              quos neque dolore unde. Repudiandae eos nemo exercitationem nobis
              vero incidunt et eum molestiae cumque.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={imgContainerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className='bg-container'
      >
        <motion.img
          animate={{
            ...moveAnimation,
            transition: moveAnimationTransition,
          }}
          src={img1}
          alt='welcome-img'
        />
      </motion.div>
    </div>
  )
}

export default Home
