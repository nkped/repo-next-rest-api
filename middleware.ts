import { NextResponse } from "next/server";


//ifcon, regex and config object can all asign middleware as shown below function    


export function middleware(request: Request) {
    console.log('Middleware')
    console.log(request.method)
    console.log(request.url)
    
    const origin = request.headers.get('origin')
    console.log(origin) 
    
    return NextResponse.next()
}

//middleware to match (and only run on) all api-routes
//config object can be used instead or together with ifcon  
export const config = {
    matcher: '/api/:path*'
}

/*  //put code inside funtion     
    if (request.url.includes('/api/')) {
        //put conditional code here
    }
*/

    //regex
    // const regex = new RegExp('/api/*')
    //if ( regex.test(request.url)) { put exe code here }