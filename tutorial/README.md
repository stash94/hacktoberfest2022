Automating Leftovers: An Introduction to Dev(eloper)Op(eration)s
===================================================================


Prelude
-------

Today, you will learn a little something about DevOps in the most natural way
possible: cleaning up somebody else's mess.

0. Fork this project to your own account on Github

By the end of this training, you will setup a robust, automatic maintenance
pipeline for this simple software project that can be applied in every project
you work on going forward! Follow the directions, ask the instructor questions
when you get stuck, and when you see:

> Interrogation Time!

It means your instructor is going to put on an act as the person who made the
mess you are currently cleaning up. Try to get as much information from them
as possible!


Chapter 1a. Just..run it?
------------------------

As the other README said, just try to run it... but how?

> Interrogation Time!
> Find out about the application's purpose and usage!

Chapter 1b. Dependencies
------------------------

Now that we know *how* to run it, let's try it. Does it work?

> Interrogation Time!
> Find out more about the error, and the application's required setup!

Chapter 1c. Exercises
---------------------

0. Add the required dependency back to the `package.json`
1. Run the command to initialize the repository
2. Run the application (successfully) a few times
3. Add a short summary to the `README.md` about how to use the application


Chapter 2a. Testing
-------------------

Now that we know it runs successfully, let's try to run the "tests" that were
advertised...How do we do that?

> Interrogation Time!
> Find out how tests are run, and why they aren't working!

Chapter 2b. Exercises
---------------------

0. Add a `test` script to the `package.json` to make running tests simple
1. Fix the broken code that the failing test indicates
2. Copy/paste tests for the other 3 mathematical operations
3. Add a short summary to the `README.md` about how to test the application


Chapter 3a. Linting
-------------------

It was advertised that this project had a way to "enforce good code style" and 
"prevent errors", but the style seems jank.

We should run that "code styler" to see what needs to be fixed..How do we do
that?

> Interrogation Time!
> Find out how to run the linter, and what "setup" is missing

Chapter 3b. Exercises
---------------------

0. Add the mentioned linter to the devDependencies in the `package.json`
1. Add a `lint` script to the `package.json` to make running the linter simple
2. Run the linter on `calculator.js` and fix the style issues it finds
3. Add a short summary to the `README.md` about how to lint the application


Chapter 4a. Building for users
------------------------------

This tool is fine (I guess), but in it's current state, using it requires
installing Node and npm. That's okay for developers, but what about end users?
Was there some sort of "building" that happened so anyone could use it?

> Interrogation Time!
> Find out how this application was built and distributed to users!

Chapter 4b. Exercises
---------------------

0. Add the mentioned devDependency to the `package.json` for building
1. Add a `build` script to the `package.json` to make building easy
3. Add a short summary to the `README.md` about how to build the application


Chapter 5 Automation
--------------------

This is where we shall do better than our predecessor. All of these tools are
useful, but not if no one remembers to run them! They should all run
automatically whenever things change so everyone can keep on top of them.

> Follow along with the instructor to learn about Github Actions!


Conclusion
----------

Congratulations! You have gotten a taste of what DevOps is about! It is about
making administrative tasks:

- Easy
- Explicit
- Automatic

Now you can spend less time administrating this project, and more time
developing it! If anyone new joins your team to work on it, getting them up to
speed will be much easier.


References
----------

- [npm Cheat Sheet](https://devhints.io/npm)
- [Github Actions Documentation](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)
