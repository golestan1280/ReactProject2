import React,{Component} from 'react';
// // import { link } from 'fs';

// class Counter extends Component {
    
//     state={
//         count:0,
//         tags:["tag1","tag2","tag3"]
//     };

//     render() { 
//         // let classes="badge m-2 badge-";
//         // classes += this.state.count === 0 ? "warning" : "primary";
//         // دو خط بالا انتخاب شود کلیک راست کن گزینه ریفکتور بزن
//         // دو خط بالا تبدیل به کلاس میشود و در هر قسمت برنامه نیاز شد فراخوانی می شود
//         //در واقع یکسری استایل ها را به حالت متد در می آوریم
//         // let classes = this.getBadgeClasses();

//         return (
//             <div>
//                 {/* <span className={classes}>{this.formatCount()}</span> */}
//                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//                 <button className="btn btn-secondary btn-sm">Increment</button>
//                 <ul>
//                     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
//                 </ul>
//             </div>

//         );
//     }

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes;
//     }

//     formatCount(){
//         const {count}=this.state;
//         return count === 0 ? 'Zero': count;
//     }
// }
 
// export default Counter;



///////////////////////////////////////

// import React,{Component} from 'react';
// class Counter extends Component {
    
//     state={
//         count:0,
//         tags:["tag1","tag2","tag3"]
//     };

//     renderTags(){
//         if (this.state.tags.length === 0) return <p>There are no tags!</p>;

//         // در صورتی که مقداری در آرایه باشه با مپ کل عناصر آرایه چاپ می شود
//         return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
//     }

//     render() { 
      

//         return (
//             <div>

                // {/* true && "Hi" 
                //     output Hi*/}

                // {/* true && "Hi" && 1 
                //     output 1 */}

//                 {/* {this.state.tags.length ===0 && "Please create a new tag!"}
//                 {this.renderTags()}
                
//             </div>

//         );
//     }

//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes;
//     }

//     formatCount(){
//         const {count}=this.state;
//         return count === 0 ? 'Zero': count;
//     }
// }
 
// export default Counter; */}



////////////////////////////////

// import React,{Component} from 'react';

class Counter extends Component {
    
    state={
        count:0,
        tags:["tag1","tag2","tag3"]
    };

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }
    // handleIncrement(){
    //     console.log("clicked!",this)
    // }

    // وقتی از اروفانکشن استفاده می شود نیازی به بایند کردن دیس نیست
    handleIncrement=() =>{
        console.log("clicked!",this);
        this.setState({count: this.state.count+1});
    }

    render() {       

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                
            </div>

        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count}=this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;