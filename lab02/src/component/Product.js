export default function Product({name, resetFunc})
{
    return(
    <>
    <p>{name}</p>
    <button onClick={()=>{resetFunc()}}>Delete</button>
    </>
    );
}