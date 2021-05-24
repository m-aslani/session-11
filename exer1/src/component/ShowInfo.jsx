import React from 'react'

 const ShowInfo = ({user,signout,signOut}) => {
     console.log(user);
    return (
        <div className={signout ? "show--info--body--invisible" :"show--info--body"}>
            
                <h1 >{"با موفقیت وارد شدید"}</h1>
                <p className="info">{user.firstName+" : نام"}</p>
                <p className="info">{user.lastName+" : نام خانوادگی"}</p>
                <p className="info">{user.email+" : ایمیل"}</p>
                <br /><br />
                <button className="btn" onClick={signOut}>خروج</button>
        </div>
    )
}
export default ShowInfo;