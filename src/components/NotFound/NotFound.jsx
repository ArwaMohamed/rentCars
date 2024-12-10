import notFound from '../../assets/imges/not-found/404-not-found.png'
export default function NotFound() {
  return (
<>
<div className='d-flex justify-content-center align-items-center vh-100'>
<img src={notFound} className='w-50 m-auto' alt='not found'/>

</div>
</>  )
}
