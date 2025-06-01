import { motion } from 'framer-motion'

const Modal = ({ children, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed z-10000000000 top-0 left-0 w-full h-full bg-black/70 backdrop-blur-[3px] flex justify-center items-center"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 20 }}
        transition={{ duration: 0, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Modal
