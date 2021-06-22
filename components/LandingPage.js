function LandingPage() {
    return (
        <div>
            <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-12 md:mt-24 space-x-3">
                <h1 className="font-black text-6xl leading-tight">Dolo Blog Page</h1>
                <div className="space-y-3">
                <p className="text-2xl font-light">
                      Dont Miss Out!
                    </p>
                    <p className="text-xl font-light">
                        Get the latest...
                        Tips, advice, inspiration, and more sent right to your inbox.
                    </p>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                    }}>
                        <input 
                            type="text" 
                            placeholder="Enter your email..." 
                            className="bg-white rounded border border-gray-300 p-2"/>
                        <button 
                            type="submit" 
                            className="bg-blue-900 text-white text-xs p-3 rounded">Getstarted</button>
                    </form>
                    <p className="text-gray-600 text-sm">
                        For terms & individuals - web, mobile, Mac, Windows.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
