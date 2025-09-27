import logo from './logo.svg';
import './App.css';
import Codeblock from './components/codeblock';
import Terminalblock from './components/terminalblock';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-title">
          <img src={logo} className="header-logo" alt="logo" />
          <h1>Kurt Metra</h1>
        </div>

        <div className="header-center">
          <h1>The Fundamentals of Python</h1>
        </div>
      </div>

      <div className="body">
        <section id="introduction">
          <h1>Introduction to Python</h1>
          <p>Python is a high-level, interpreted programming language known for its readability and versatility.</p>
          <p>Created by <span className="bold">Guido van Rossum</span> and first released in 1991, it is used for:</p>
          <ul>
            <li>web development (backend)</li>
            <li>software development</li>
            <li>machine learning</li>
            <li>data analysis</li>
            <li>and much more...</li>
          </ul>

          <h2>Why Python?</h2>
          <p>Python is popular not only because of its versatility,
            but also because of its simple and easy-to-learn syntax similar to
            the English language. This makes it an excellent choice for beginners
            while still being powerful enough for experts.
          </p>
          <p>
            Python has a large and active community, which means there are plenty of resources,
            libraries, and frameworks available to help you get started and solve problems.
            Python also runs on an interpreter system, meaning that code can be executed
            as quickly as it is written. This means that prototyping can be very quick.
            Python is versatile, meaning it can be procedural, object-oriented, or functional.
          </p>

          <h2>
            Python Syntax Compared to Other Languages
          </h2>
          <p>
            Python was designed for readability, and has incredible similarities to the
            English language. The best way to learn Python's syntax is to treat it as if
            you are learning English as a second language. Focus on understanding the
            structure and flow of the language, and don't be afraid to make mistakes.
          </p>

          <p>
            Unlike other programming languages, Python uses indentation to define code blocks,
            rather than curly brackets or keywords. This enforces a clean and consistent
            coding style, making it easier to read and understand.
          </p>

          <h1>Getting Started</h1>
          <p>
            In this tutorial, we'll get started with the basics and fundamentals of Python.
            We'll cover topics such as installation, variables, data types, functions,
            and overall basic execution.
          </p>

          <h2>Installation</h2>
          <p>Many PCs and Macs will have Python already installed.</p>
          <p>
            To check if you have Python installed on a Windows PC, search in the
            start bar for Python or run the following command in Command Prompt:
          </p>
          <Terminalblock>
            C:\Users\Your Name&gt; python --version
          </Terminalblock>
          <p>, Or if you have a Mac/Linux, you can run: </p>
          <Terminalblock>
            $ python --version
          </Terminalblock>

          <p>
            If you don't have Python installed,
            you don't
            need to install it for this tutorial, you can use 
            this <a href="https://www.programiz.com/python-programming/online-compiler/">
            online Python interpreter
            </a> for ease of access.
          </p>
          <p>
            But for future reference,
            you can download it from <a href="https://www.python.org/downloads/">python.org</a>.
            Make sure to download the latest version (3.11.4 as of June 2024). 
          </p>

          <h2>Python Quickstart</h2>
          <p>
            Python is an interpreted language, meaning you can run code directly from the
            command line or terminal. You can also write code in a text editor and run it
            from the command line.
          </p>
          <p>
            If you've installed Python, great! Otherwise, that's okay, you can use the online
            interpreter I linked above. Let's write our first Python program which we'll
            name <span className="code-inline">hello.py</span> (If you're using the online
            interpreter, you don't have to name anything).
          </p>

          <Codeblock>
            print("Hello, World!")
          </Codeblock>
          <p>
            Simple as that. If you're using the online interpreter,
            just click 'Run'. If you're running Python on your
            computer, save the file, and run it from the command line with:
          </p>
          <Terminalblock>
            C:\Users\Your Name&gt; python hello.py
          </Terminalblock>
          <p>The output should be: </p>
          <Terminalblock>
            Hello, World!
          </Terminalblock>
          <p>
            Now what's going on here? How did this program output "Hello, World!"?
            Let's break it down.
          </p>
          <h2>The Print Function</h2>
          The <span className="code-inline">print()</span> function is a built-in
          function in Python that outputs text to the console or terminal. The text
          to be printed is passed as an argument to the function, enclosed in parentheses.
          <p>
            Did I lose you? Sorry! Let me start over.
          </p>
          <h2>Functions</h2>
          <p>
            A function is a block of code that performs a specific task. In Python,
            functions are defined using the <span className="code-inline">def</span> keyword,
            followed by the function name and parentheses. The code block within the function
            is indented.
          </p>

          <p>
            For example, if I wanted to create a function called 'Hello' that prints
            "Hello!", I would write:
          </p>
          <Codeblock>
              {
`def Hello():
  print("Hello!")`}
          </Codeblock>
          <p>
            Then to execute that function, we would call it by writing:
          </p>
          <Codeblock>
              Hello()
          </Codeblock>
          <p>
            The two parentheses <span className="code-inline">()</span> 
            indicate that we are calling the function. It's also what indicates that it
            is a function. When we call the function, the code block within the function
            is executed, and since <span className="code-inline">print("Hello!")</span> 
            is in the code block, then that's what's executed, resulting in "Hello!" as the
            output.
          </p>
          <p>
            But that's kind of redundant, isn't it? Because that's what print already does!
            Print is a <span className="italic">function</span>, which is why it has the
            parentheses and which is why we went over what functions are.
          </p>
          <p>
            <span className="code-inline">print()</span> is everywhere. It's a function
            built into Python, so that you don't have to make your own print function.
            It is used to output text into the console or terminal. The text to be printed
            is placed in-between the two parentheses. In that case, the text is called
            an <span className="italic">argument</span> because it is an input to the function.
          </p>
          <h2>Arguments in Functions</h2>
          <p>
            Let's tackle arguments more to help you understand them better. Arguments are
            the things that you put in-between the two parentheses () when calling a 
            function.
          </p>
          <h3>Here's an example,</h3>
          <Codeblock>
            print("Hey there!")
          </Codeblock>
          <p>
            Care to guess where the argument is in this example?
          </p>
          <p>
            ...That's right, it's "Hey there!" (Quotations included).
            The argument is the input to the function. In this case, the input is the text
            "Hey there!", and the function is print, which outputs the argument to the
            console or terminal.
          </p>
          <p>
            Let's make another example. This time, we'll make our own function that takes
            an argument and prints it to the console.
          </p>
          <Codeblock>
{`def say(word):
  print(word)

say("Yes")`}
          </Codeblock>
          <p>
            Output:
          </p>
          <Terminalblock>
            Yes
          </Terminalblock>
          <p>
            In this example, we defined a function called <span className="code-inline">say</span>
            , which takes one argument called <span className="code-inline">word</span>, then
            passes it down to <span className="code-inline">print()</span>.
            When we call the function with the argument "Yes", it prints "Yes" to the console.
          </p>
          <p>
            The argument can be any valid data type, such as a string (text), integer (number),
            float (decimal number), list, or even another function.
          </p>
          <p>
            Keep in mind that 'word' in <span className="code-inline">def say(word):</span>
            doesn't necessarily have to be 'word'. It can be anything, like 'x', 'y', or
            'my_argument', and if you pass it down correctly to print like 
            <span className="code-inline">print(my_argument)</span>, it will still work.
            Think of 'word' as a placeholder. When you call the function, you replace
            the 'word' with the actual word that you want to use. In this scenario, word
            is replaced with "Yes".
          </p>
          <p>
            In order to let you better understand these 'placeholders', let's go over
            variables.
          </p>
          <h2>
            Variables
          </h2>
          <p>
            What are variables? Think of them as a labeled box where you can store information.
            The label is the variable's name, and the contents of the box are the value.
            In Python, we label this box by first typing the variable's name, then
            we put something inside it by using the equals sign <span className="code-inline">=</span>.
            then after that comes the value that we want to store in the box.
          </p>
          <p>
            Say, for example, I want a box labeled <span className="bold">age</span> that
            contains the number <span className="bold">25</span>. I would write:
          </p>
          <Codeblock>
            age = 18
          </Codeblock>
          <p>
            How about a box labeled <span className="bold">name</span> that contains
            the text <span className="bold">Kurt</span>? I would write:
          </p>
          <Codeblock>
            name = "Kurt"
          </Codeblock>
          <p>
            Notice how the text is in quotations? That's because it's a string, which
            is a data type that represents text. Numbers don't need to be in quotations.
            Python will error if you don't wrap text in quotations. You wrap text in
            quotations to tell Python that it's text. In other programming languages,
            sometimes single quotation marks will refer to a different data type,
            but Python doesn't care. You can use single or double quotation marks.
            Just don't forget to enclose it.
          </p>
          <p>
            If you wrap numbers in quotations, Python won't see it as a number,
            but as text. This means that you can't do math with it. For example:
          </p>
          <Codeblock>
            {`age = "18"
age + 5 # This will error because you can't add text and a number`}  
          </Codeblock>
          <p>
            But writing it as-is tells Python that it's a number, so you can do math
            with it. In fancy programmer lingo, we call it 
            an <span className="italic">integer</span>.
          </p>
          <h2>What more can we do with Variables?</h2>
          <p>
            Variables can be used to store any data type, including strings, integers,
            floats, lists, and even functions. You can also use variables to store the
            result of a function call.
          </p>
          <p>
            Remember those 'placeholders' that I was talking to you about earlier?
            Variables are like that. They are placeholders for values that can change.
            You can use variables to make your code more flexible and reusable.
          </p>
          <p>
            We wrote a variable earlier called <span className="code-inline">name</span>
            that contains the text <span className="code-inline">"Kurt"</span>.
            In simpler terms, we made a box earlier labeled 'name' that had 'Kurt' inside
            it. Let's print the contents of that box.
          </p>
          <Codeblock>
{`name = "Kurt"
print(name)`}
          </Codeblock>
          <p>Output:</p>
          <Terminalblock>
            Kurt
          </Terminalblock>
          <p>
            Is it still complicated for you? The best way to understand this is to break it
            down in English language. If I were a beginner, I'd read it this way:
          </p>
          <p className='italic'>
            Name is equal to 'Kurt'. If we print name, it will print its value, which is
            'Kurt'.
          </p>
          <p>
            See? It's that simple. Just treat it like you're reading English. That's the
            beauty of Python.
          </p>
          <p>
            Just like regular math, we can also do math with variables that contain
            integers. Let's say I have a variable called <span className="code-inline">x</span>
            that contains the number <span className="code-inline">5</span>.
            Then another variable called <span className="code-inline">y</span>
            that contains the number <span className="code-inline">10</span>.
            I can add them together and store the result in a new variable called
            <span className="code-inline">z</span> like this:
          </p>
          <Codeblock>
{`x = 5
y = 10
z = x + y
print(z)`}
          </Codeblock>
          <p>Output:</p>
          <Terminalblock>
            15
          </Terminalblock>
          <p>
            If you're not starting to get it yet, let me help you.
          </p>
          <p>
            X has the value of 5, while Y has the value of 10. Z has the value of X + Y,
            which is 5 + 10, which equals 15. So when we print Z, it prints 15.
            So basically:
          </p>
          <Codeblock>
{`z = 5 + 10`}
          </Codeblock>
          <p>
            And that's how variables work. They are placeholders for values that can change.
            You can use variables to make your code more flexible and reusable.
            There are also several arithmetic operations out there that you can use with
            variables that contain integers, such as subtraction (-), multiplication (*),
            division (/), and modulus (%). You can also use parentheses to group operations
            and control the order of operations.
          </p>
          <h2>Combining Everything We've Learned</h2>
          <p>
            Programming is all about combining different concepts and building upon them.
            In simpler terms, combining everything you've learned. It's like building blocks.
            The more blocks you have, the more complex and interesting structures you can
            create.
          </p>
          <p>
            Let's combine everything we've learned so far. We've learned about functions,
            arguments, and variables. Let's use them to create a simple program that
            calculates the user's age in ten years time.
          </p>
          <Codeblock>
{`def calculate_future_age(current_age):
  future_age = current_age + 10
  return future_age
age = 25
future_age = calculate_future_age(age)
print(future_age)`}
          </Codeblock>
          <p>Output:</p>
          <Terminalblock>
            35
          </Terminalblock>
          <p>
            Something that hasn't been tackled yet is the 
            <span className="code-inline">return</span> keyword. The return keyword is used
            to exit a function and return a value. In this case, we are returning the value
            of <span className="code-inline">future_age</span> from the function
            <span className="code-inline">calculate_future_age</span>.
            Don't get it? Here:
          </p>
          <Codeblock>
{`def get_word():
  return "Hello"

word = get_word()
print(word)`}
          </Codeblock>
          <p>Output:</p>
          <Terminalblock>
            Hello
          </Terminalblock>
          <p>
            Like I mentioned earlier, variables can also be used to store the result of a
            function call. In this case, we are storing the result of the function call
            <span className="code-inline">get_word()</span> in the variable
            <span className="code-inline">word</span>. The result of a function is what we
            <span className="code-inline">return</span> from the function. So, if we were to
            swap <span className="code-inline">"Hello"</span> with
            <span className="code-inline">"Goodbye"</span>, the output would change accordingly.
          </p>
          <p>
            Let's make another example, this time let's make a function that takes two
            numbers as arguments and returns their sum (the result of adding them together).
          </p>
          <p>
            We declare multiple arguments by separating them with a
            comma, <span className='code-inline'>,</span>
          </p>
          <Codeblock>
{`def sum(num1, num2):
  return num1 + num2

result = sum(5, 10)
print(result)`}
          </Codeblock>
          <p>Output:</p>
          <Terminalblock>
            15
          </Terminalblock>
          <p>
            Do you get it yet? The function <span className="code-inline">sum</span>
            takes two arguments, <span className="code-inline">num1</span> and
            <span className="code-inline">num2</span>, adds them together, and returns
            the result. When we call the function with the arguments 5 and 10, it returns
            15, which we store in the variable <span className="code-inline">result</span>,
            then we print <span className="code-inline">result</span>, which outputs 15.
          </p>
          <p>
            Before we move onto the next topic, I want you to take this time and play around
            with all the concepts we've learned so far. Try creating your own functions,
            variables, and arguments. Experiment with different types of arithmetic operations.
            The best way to learn programming is by doing. Don't be afraid to make mistakes.
            That's how you learn. If you get stuck, don't worry. Just take a break and come
            back to it later. You'll be surprised at how much easier it is to understand
            things after a break.
          </p>
          <p>
            <span className="bold">REMEMBER:</span> Getting good at programming is not about memorization,
            it's about understanding. You don't have to memorize anything if you already
            understand, so don't make an effort to memorize anything. Just focus on
            understanding the concepts. The more you understand, the easier it will be to
            remember things. What can you do with what you've memorized, anyway, if you
            don't understand it?
          </p>
          <h1>If Statements, Else-If Statements</h1>
          <p>
            We've tackled the 'process' part of Python, now we move onto the
            'decision-making' part of Python. This is where things get interesting.
            In programming, decision-making is done using conditional statements.
            In Python, we use <span className="code-inline">if</span> statements to
            make decisions. An if statement is a block of code that is executed
            if a certain condition is true. If the condition is false, the code block
            is skipped.
          </p>
          <p>
            We also have <span className="bold">comparative operators</span> that 
            help us make decisions.
            These are: 
            <ul>
              <li><span className="code-inline">==</span> (equal to)</li>
              <li><span className="code-inline">!=</span> (not equal to)</li>
              <li><span className="code-inline">&lt;</span> (less than)</li>
              <li><span className="code-inline">&lt;=</span> (less than or equal to)</li>
              <li><span className="code-inline">&gt;</span> (greater than)</li>
              <li><span className="code-inline">&gt;=</span> (greater than or equal to)</li>
            </ul>
            Let's use these operators in an <span className="italic">if</span> statement.
          </p>
          <Codeblock>
{`age = 18
if age < 18:
  print("You are a minor.")
else:
  print("You are an adult.")`}
          </Codeblock>
          <p>
            If you understood this quickly (which, most likely, you did), then great!
            If not, let me break it down for you.
          </p>
          <p>
            We have a variable called <span className="code-inline">age</span> that
            contains the number <span className="code-inline">18</span>. Then we have an
            <span className="code-inline">if</span> statement that checks if the value of
            <span className="code-inline">age</span> is less than <span className="code-inline">18</span>.
            If it is, it prints "You are a minor." If it's not, it prints "You are an adult."
          </p>
          <p>
            The <span className="code-inline">else</span> statement is optional. It is
            used to execute a block of code if the condition in the <span className="code-inline">if</span>
            statement is false. You can also have multiple <span className="code-inline">elif</span>
            (else if) statements to check for multiple conditions.
          </p>
          <Codeblock>
{`age = 74
if age < 18:
  print("You are a minor.")
elif age >= 60:
  print("You are a senior.")
else:
  print("You are an adult.")`}
          </Codeblock>
          <p>
            Props to you if you understood it immediately. Give yourself a round of applause!
          </p>
          <p>But if you didn't, remember: Just try reading it in English. Let's break it down:</p>
          <p>
            We have a variable called 'age', which has a value 
            of <span className="code-inline">74</span>. Value is equals to 74.
            We have two conditional statements that checks for the following conditions:

            <ul>
              <li>If age is less than 18,</li>
              <li>If age is greater than OR equals to 60</li>
            </ul>
          </p>
          <p>
              If the first condition are met, then it 
              prints <span className="code-inline">You are a minor.</span>. (if)<br />
              If the second condition is met, then it 
              prints <span className="code-inline">You are a senior.</span> (elif)<br />
              But if neither of the two conditions is met, then it
              prints <span className="code-inline">You are an adult.</span>. (else)
            </p>
            <p>
              Let's write a program that checks if a number is even or odd. First,
              we have to figure out what makes a number even or odd. A number is
              even if it is divisible by 2, and odd if it is not. We can use the
              modulus operator <span className="code-inline">%</span> to check if a
              number is divisible by another number. 
              The modulus operator returns
              the remainder of a division operation. 
            </p>
            <p>
              For example, <span className="code-inline">5 % 2</span>
              returns <span className="code-inline">1</span> because 5 divided by 2 is 2
              with a remainder of 1. If a number is divisible by another number, the
              remainder is 0. So, if a number is 
              even, <span className="code-inline">number % 2</span>
              returns <span className="code-inline">0</span>. 
              If a number is odd,
              <span className="code-inline">number % 2</span>  
              returns <span className="code-inline">1</span>.
            </p>
            <p>
              For this program we'll also tackle <span className="bold">booleans</span>.
            </p>
            <h2>What are Booleans?</h2>
            <p>
              Booleans are a data type that can only have two values:
              <span className="code-inline">True</span> and <span className="code-inline">False</span>.
              They are often used in conditional statements to check if a condition is
              true or false. In Python, booleans are case-sensitive, so make sure to
              capitalize the first letter.
            </p>
            <p>
              In the program we'll write, we will use booleans to check if a number is
              even or odd. If a number is even, we will set a boolean variable called
              <span className="code-inline">is_even</span> to <span className="code-inline">True</span>.
              If a number is odd, we will set <span className="code-inline">is_even</span>
              to <span className="code-inline">False</span>.
            </p>

          <Codeblock>
{`async def check_even(num):
  remainder = num % 2
  if remainder == 0:
    return True
  else:
    return False

number = 7 
is_even = check_even(number)

if is_even == True:
  print("The number is even!")
else:
  print("The number is odd!")`}
            </Codeblock>
            <p>
              Output:
            </p>
            <Terminalblock>
              The number is odd!
            </Terminalblock>
            <p>
              Hopefully you're getting it by now. Let's break it down:
            </p>
            <p>
              We have a variable called number whose value is 7.<br/>
              We check if it is even through a function
              called <span className="code-inline">check_even</span>.
              We use the modulo operator (%) to get the remainder of the 
              quotient and we store that in a temporary variable named
              'remainder'.
            </p>
            <p>
              Then, we use an if statement to determine what our function will
              return. If the remainder is equals to 0, then we 
              return <span className="code-inline">True</span>, indicating
              that the number is an even number.
            </p>
            <p>
              Otherwise, we return <span className="code-inline">False</span>,
              indicating that it is an odd number.
            </p>
            <p>
              We store the result of this function in a variable called 'is_even'.
              This variable will be equal to either True or False, and we use an
              if-else statement to print an output accordingly.
            </p>
            <p>
              We can also shorten this line of code and make it more efficient like so:
            </p>
            <Codeblock>
{`async def check_even(num):
  if (num % 2) == 0:
    return True
  return False

number = 7
if check_even(number):
  print("The number is even!")
else:
  print("The number is odd!")`}
            </Codeblock>
            <p>
              And if you try that block of code out, it still works the same way.
            </p>
            <p>
              The reason why I didn't add 
              an <span className="code-inline">else</span> statement for our
              function is because returning means exiting the function, meaning any
              code below it will be skipped over completely.
              Our <span className="code-inline">return True</span> statement is 
              within the scope
              of <span className="code-inline">if (num % 2) == 0:</span>, so
              it will only run if the remainder of num divided by 2 is equals to
              0. Otherwise, it completely skips over and moves over
              to <span className='code-inline'>return False</span>.
            </p>
            <p>
              Noticed anything else? That's right. I didn't 
              do <span className='code-inline'>if check_even(number) == True:</span>,
              I just did <span className='code-inline'>if check_even(number):</span>. Why?
            </p>
            <p>
              You only use the comparative <span className='code-inline'>==</span> equals operator if
              you're comparing values. In this scenario, we're not comparing values, we're
              checking if the condition is true. You don't need to check if a value is true
              in Python, or any other programming language.
            </p>
            <p>
              Here's an example where you would <span className="italic">have</span> to
              use the equals comparative operator.
            </p>
            <Codeblock>
{`async def check_even(num):
  if (num % 2) == 0:
    return True
  return False

number = 7
if check_even(number) == False:
  print("The number is odd!")
else:
  print("The number is even!")`}
            </Codeblock>
            <p>
              Do you get why? Because we have to check if what the function returns is equals
              to false.
            </p>
            <h1>That's all for now!</h1>
            <p>
              That's all for tonight! It's 10:29 PM on a Saturday as I'm writing this. I started
              around 8:00 PM. If that's not bad then I don't know what is. Thanks for reading
              my guide!
            </p>
            <p>
              The guide doesn't end here. I will update it bi-weekly with new information
              and add more features to this page (such as the ability to easily navigate
              between sections, so you don't have to scroll painstakingly).
            </p>
            <p>
              If you have any suggestions or ideas you'd like me to tackle in the next update,
              feel free to contact me 
              on <a href="https://www.facebook.com/m.trakurt/">Facebook</a> or e-mail me 
              via <a>metrakurt@gmail.com</a>!
            </p>
        </section>
      </div>
    </div>
    
  );
}

export default App;
