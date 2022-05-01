interface RepositoryItemProps {// An array of properties that are passed to the component
   repository:{
       name: string;
       description: string;
       html_url: string;
   } 
}
export function RepositoryItem(props: RepositoryItemProps){// an object with a property of repository
    return(
        <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.name}</p> 
        <a href={props.repository.html_url}>Acess your repositories </a>
    </li>
    )
}