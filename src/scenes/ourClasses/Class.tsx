type Props = {
  name: string;
  description: string;
  image: string;
}

const Class = ({name, description, image}: Props) => {
  const overlayStyles = "absolute p-5 z-20 whitespace-normal flex flex-col justify-center items-center bg-primary-500 h-[380px] w-[450px] text-center text-white opacity-0 transition duration-500 hover:opacity-90"

  return (
    <li className="relative h-[380px] w-[450px] mx-5 inline-block">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image}/>
    </li>
  )
}

export default Class