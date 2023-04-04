export default function Header(props) { 
   return (
        <nav> 
           <h1>Anime Recommendation Site</h1>
           <ul> 
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign-Up</a></li>
            <li><a href="#">Login-In</a></li>
            </ul> 
            <form onSubmit={props.HandleSearch}> 
              <input 
               type="search" 
               placeholder="search anime"
               required 
               defaultValue= {props.search}  
               onChange={e => props.SetSearch(e.target.value)}
              />   
            </form>  
        </nav>   
    );
}

 