page, updatePage = useState();

//model_choice
if( page == 0 )
{
  ReactDOM.render(  , 
  document.getElementById("root")
  ) ;
  //append choice into .txt
  updatePage( (page) => {page++} );
}

//dataset_choice
if( page == 1 )
{
  ReactDOM.render(  , 
  document.getElementById("root")
  ) ;
  //append choice into .txt
  updatePage( (page) => {page++} );
}

//score_choice
if( page == 2 )
{
  ReactDOM.render(  , 
  document.getElementById("root")
  ) ;  
  //append choice into .txt
  updatePage( (page) => {page++} );
}


//result_page
if( page == 2 )
{
  ReactDOM.render(  , 
  document.getElementById("root")
  ) ;  

//send .txt to logic.py

//write result of logic.py into result.txt

//render value inside result.txt on as final state of app.jsx
}
