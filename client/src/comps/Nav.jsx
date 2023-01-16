import React from 'react';

function Nav() {
    return (
       <nav className="bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
                <div className="w-1/2 text-left">
                    <a href="#" className="text-lg font-medium">Home</a>
                </div>
                <div className="flex w-1/2 text-right justify-evenly">
                    <a href="#" className="text-base font-medium">Members Only</a>
                    <a href="#" className="text-base font-medium">Login</a>
                    <a href="#" className="text-base font-medium">Register</a>
                 </div>
                    </div>
                        </div>
            </nav>

    );
}

export default Nav;
