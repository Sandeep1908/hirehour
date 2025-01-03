
import ClipLoader from "react-spinners/ClipLoader";
const Spinner:React.FC<{loading:boolean,size:number,color?:string}>=({loading,size,color})=>{
    return(
            <ClipLoader
                    loading={loading}
                    size={size}
                
                    color={color}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
    )
}

export default Spinner