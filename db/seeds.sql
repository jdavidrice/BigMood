-- Use the database --
USE bigmood_db;

INSERT INTO themes (name)
VALUES
("light"),
("dark"),
("red"),
("blue"),
("green");

INSERT INTO moods (name, icon)
VALUES
("excited","sentiment_very_satisfied"),
("happy", "sentiment_satisfied"),
("neutral", "sentiment_neutral"),
("sad", "sentiment_dissatisfied" ),
("breakdown", "sentiment_very_dissatisfied");


INSERT INTO activities (name, icon)
VALUES
("chores", "delete"),
("exercise", "directions_run"),
("family", "child_friendly"),
("friends", "group"),
("games", "casino"),
("home", "home"),
("meal", "free_breakfast"),
("music", "album"),
("reading", "book"),
("travel", "directions_car"),
("tv/movies", "tv"),
("work", "domain");

INSERT INTO quotes (author, body)
VALUES
("Oscar Wilde", "Be yourself; everyone else is already taken."),
("William W. Purkey","You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."),
("Mahatma Gandhi", "Be the change that you wish to see in the world."),
("Mahatma Gandhi", "Live as if you were to die tomorrow. Learn as if you were to live forever."),
("Martin Luther King Jr", "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."),
("Friedrich Nietzsche", "Without music, life would be a mistake."),
("Stephen Chbosky", "We accept the love we think we deserve."),
("Marilyn Monroe", "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."),
("Albert Einstein", "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."),
("Oscar Wilde", "We are all in the gutter, but some of us are looking at the stars."),
("Neil Gaiman", "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."),
("Bill Keane", "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."),
("Thomas A. Edison", "I have not failed. I've just found 10,000 ways that won't work."),
("Albert Einstein", "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."),
("Dr. Seuss", "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go..."),
("George Eliot", "It is never too late to be what you might have been."),
("Maya Angelou", "There is no greater agony than bearing an untold story inside you."),
("Pablo Picasso", "Everything you can imagine is real."),
("C.S. Lewis", "You can never get a cup of tea large enough or a book long enough to suit me."),
("George Bernard Shaw", "Life isn't about finding yourself. Life is about creating yourself."),
("J.K. Rowling", "To the well-organized mind, death is but the next great adventure."),
("Theodore Roosevelt", "Do what you can, with what you have, where you are."),
("Winston S. Churchill", "Success is not final, failure is not fatal: it is the courage to continue that counts."),
("Helen Keller", "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."),
("Stephen Chbosky", "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be."),
("Paulo Coelho", "And, when you want something, all the universe conspires in helping you to achieve it."),
("John Lennon", "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one");