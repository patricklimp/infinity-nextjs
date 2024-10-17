interface OrderProps {
    order: number;
}

export default function Order (props:OrderProps){
    return (
        <>
        <div className="moldura-numero">
                     {props.order}
        </div>
        
        </>
    )
}