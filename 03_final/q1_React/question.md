### Question:

Where in a react component would you put code 
that you only want to invoke when said component mounts?

Include class and functional component methods of doing this. 
Provide examples.

If you don't recall, research it and provide examples.

### Answer: 

After calling the constructor function, you would use the componentDidMount lifecycle method. 
Example:
    componentDidMount() {
        this.interval = setInterval(this.fetchWeather, 15000);
    }
This method fetches data that the component will use after it is rendered.