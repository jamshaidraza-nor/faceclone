import profile from '../assets/profile.jpg'

function Avatar() {
  return (
    <div>
        <img className='rounded-full w-[40px]' src={profile} alt="" />
    </div>
  )
}

export default Avatar