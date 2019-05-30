Automating Leftovers: An Introduction to C(ontinuous) I(ntegration)
-------------------------------------------------------------------

Prelude
-------

You will learn a little something about CI in the most natural way possible:
cleaning up somebody else's mess.

0. Request to be added to this project as a collaborator with **Write** access
1. Create a new branch in this repository based off **master**

> For the sake of simplicity, please make your branch name some combination of
> your first and last name. Thank you.

Follow the directions, ask the instructor questions when you get stuck, and when
you see:

> Interrogation Time!

It means your instructor is going to put on an act as the person who made the
mess you are currently cleaning up.

Chapter 0a. Just..run it?
------------------------

As the other README said, just try to run it... wait, how do you use this?

> Interrogation Time!

Chapter 0b. Exercises
----------------------

0. Write actual instructions in the other README on how to use it.

Chapter 1a. Dependencies
------------------------

Now that we know *how* to run it, let's try it. Does it work?

> Interrogation Time!

Chapter 1b. Exercises
---------------------

0. Add the required dependency back to `package.json`
1. Referencing the CircleCI documentation linked in the *References* section, add
   a step to the `.circleci/config.yml` to automate dependency installation **in
   the cloud**.

Chapter 2a. Testing
-------------------

Now that we know it runs successfully, let's try to run the "tests" that were
advertised...How do we do that?

> Interrogation Time!

Chapter 2b. Exercises
---------------------

0. Change the npm test script in the `package.json` to make running tests simple
1. Fix the broken code that the failing test indicates
2. Add tests for the other 3 mathematical operations
3. Add a step to the CircleCI config to automate running tests

Chapter 3a. Linting
-------------------

It was advertised that this project had a way to "enforce good code style" and 
"prevent errors", but the style seems out of wack.

We should run that "code styler" to see what needs to be fixed..How do we do
that?

> Interrogation Time!

Chapter 3b. Exercises
---------------------

0. Add the intended linter package to the devDependencies in the `package.json`
1. Add an npm script to the `package.json` to make running the linter simple
2. Run the linter on `calculator.js` and fix the style issues it finds
3. Add a step to the CircleCI config to automate running the linter

Chapter 4a. Bundling for CLI
----------------------------

This is supposed to be a CLI application. It was being distributed as a single
file for people to use, but how was the previous maintainer doing that? There is
no mention of any tools like that in the README or the `package.json`...

> Interrogation Time!

Chapter 4b. Exercises
---------------------

0. Add the intended bundler package to the devDependencies in the `package.json`
1. Add an npm script to the `package.json` to make bundling simple
2. Add steps to the CircleCI config to:
    0. Run the bundler
    1. Archive the bundled application as an artifact of the build

> Note: You must search a little deeper in the CircleCI documentation to figure
> out how to do this! If you get stuck, as your instructor.

Conclusion
----------

Congratulations! You have gotten a taste of what CI is about. Now, if someone
else has to work on this application, it should be straightforward for them to
get started.

References
----------

- https://circleci.com/docs/2.0/language-javascript/
