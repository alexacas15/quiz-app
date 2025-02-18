function QuizApp(props) {
    return (
        <main className="flex justify-center mt-10">
            <section>
            <div className="font-bold">
                <header>Static Quiz App</header> 
            </div>
        <section>
            <div className="justify-center mt-10 h-50 w-70 border-white shadow-2xl bg-white rounded-2xl colp">
               <header className="ml-2 mt-2 font-bold">What is the capital of france?</header>
               <div className="mt-3 ml-1 p-2 ">
                <label className="flex border-red-300 bg-red-300 rounded-md p-1">{props.City1}</label>
                <label className="flex  border-red-300 bg-red-300 rounded-md p-1 mt-1">{props.City2}</label>
                <label className="flex  border-red-300 bg-green-300 rounded-md p-1 mt-1">{props.City3}</label>
                <label className="flex  border-red-300 bg-red-300 rounded-md p-1 mt-1">{props.City4}</label>
                </div>
            </div>
        </section>
    </section>
    </main>

    )
}
export default QuizApp;