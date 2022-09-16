import supabase from "../config/supabaseClient";

const Delete = ({smoothie}) => {
    const handleDelete = async () => {
        const {data,error} = await supabase
            .from('Smoothies')
            .delete()
            .eq('id',smoothie.id)
            .single()
        
        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
        }
    }
        


    return (  
        <div>
            <i className="material-icons" onClick={handleDelete}>delete</i>
        </div>
    );
}
 
export default Delete;