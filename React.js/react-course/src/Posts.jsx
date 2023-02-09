

export const Posts = () => {
    return <button onClick={ () =>{ 
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }
    }>
     <box-icon name='like' />
     <h3>Traer datos</h3>
    </button>
};