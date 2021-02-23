import React,{useState} from 'react'

// list row
export default function StudentCard(props) {

    // state component 
    const [color, setColor] = useState('')
    const [image, setImage] = useState('https://cdn0.iconfinder.com/data/icons/characters-2-2-outlined/227/hulk-superhero-marvel-character-avatar-smileface-profile-512.png')
    const [message, setMessage] = useState('')

    // functional comp for onClick
    const handleOnClick = (sName) => {
        setColor('red')
        setImage('https://i.pinimg.com/736x/7c/ac/cb/7caccbf5c21d6a9735491c3f7d26837b.jpg')
        setMessage('I am the mighty '+sName+', How dare you touch me!!?')
    }

    // functional comp for onContextMenu
    const handleonContextMenu = () => {
        setColor('blue')
        setImage('https://d6ce0no7ktiq.cloudfront.net/images/stickers/485t.png')
        setMessage('Stop. Poking. Around!!')
    }

    // functional comp for onDoubleClick
    const handleonDoubleClick = () => {
        setColor('green')
        setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo5citERSP4DKv8Euz1BDWffU9Bi_HFqyYg&usqp=CAU')
        setMessage('STOP IT!!!')
        setTimeout(()=>{ 
            setMessage(''); 
            // here in readme it's said the color 'goes back to BLACK' but it was , so i reset it only :)
            setColor(''); 
        }, 1000);
        
    }

    // jsx render 
    return (
        <>
        <h1 onClick={() => handleOnClick(props.name)} onContextMenu={() => handleonContextMenu()} onDoubleClick={() => handleonDoubleClick()} className={color}>{props.name}</h1>
        <ul>
            <li>
                <img src={image} alt="Image"/>
                <p>{message}</p>
            </li>
        </ul>
        </>
    )
}


