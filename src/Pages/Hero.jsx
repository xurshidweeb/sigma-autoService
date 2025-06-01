import { useTranslation } from 'react-i18next'
import { FaCarAlt, FaCarBattery, FaCarCrash, FaTools, FaUnlockAlt } from 'react-icons/fa'

const base = [
  { icon: <FaCarBattery className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text1' },
  { icon: <FaTools className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text2' },
  { icon: <FaCarCrash className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text3' },
  { icon: <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text4' },
  { icon: <FaCarAlt className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text5' },
  { icon: <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text4' },
  { icon: <FaCarAlt className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text5' },
  { icon: <FaCarCrash className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text3' },
  { icon: <FaUnlockAlt className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text4' },
  { icon: <FaCarAlt className="text-red-500 text-3xl md:text-4xl" />, text: 'hero.text5' },
]

function Hero() {
  const { t } = useTranslation()

  return (
    <div>
      <div className="">
        <div className="container px-[0.5rem] md:px-10 pt-10">
          <p className="font-medium text-red-500 text-center ">// {t('hero.text')} //</p>
          <h1 className="text-4xl text-center font-bold text-white pb-6">{t('hero.title')}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {base.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-center md:justify-start h-20 p-5 bg-gray-100/30 rounded-md"
              >
                {item.icon}
                <p className="text-md md:text-xl font-medium">{t(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
