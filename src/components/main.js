import React from 'react';
import cancel from '../cancel.png'
 class Main extends React.Component{
state = {
things:[]
}
 add = (text)=>{
if(text){
this.setState({
things:[...this.state.things,text]
})
}else{
    alert('لطفا فیلد را پر کنید')
}
 }
 reset = ()=>{
    this.setState({
    things:[]
    })
     }
     did = (el)=>{
         if(el.currentTarget.checked){
            el.currentTarget.parentElement.setAttribute('class','did')
         }else{
            el.currentTarget.parentElement.classList.remove('did')
         }
         }
         remove = (el)=>{
            let arr = this.state.things
            let key = el.currentTarget.parentElement.getAttribute("data-key")
             arr.splice(key,1)
             this.setState({
             things: arr
             })
            }
render(){
return(
<>
<div><input type="text" id="input" /></div>
<div className="btn_wrapper"><button onClick={()=>{this.add(document.getElementById("input").value)}}>اضافه کردن کار</button> <button onClick={this.reset}>ریست کردن</button></div>
<ul>
 <li><span className="title_check">انجام شده</span><p>لیست کار ها</p><span className="title_img">حذف </span></li>
{this.state.things.map((text,index)=>{
return ( <li data-key={index}><input className="checkbox" type="checkbox" onClick={(e)=>{this.did(e)}} /><p>{text}</p><img src={cancel} onClick={(e)=>{this.remove(e)}} /></li>);
})}
{(this.state.things.length == 0) ? <li>کاری برای انجام دادن وجود ندارد</li> : null}
</ul>
</>
)
}
    
 }
 export default Main;
