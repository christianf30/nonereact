let btn = <div>
                <div id='timer' className='text'></div>
                <button onClick={clock}>Start Clock</button>
                <button onClick={stopClock}>Stop Clock</button>
            </div>


ReactDOM.render(btn,document.getElementById('root'));