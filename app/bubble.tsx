type Props = {
    message?: string;
}

export default function Bubble({message}:Props){

    return(
        <div>
            {message}
        </div>
    )
}