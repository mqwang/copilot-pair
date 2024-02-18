import random
import time

def play_game():
    seed_value = int(time.time())
    print("Seed value:", seed_value)
    random.seed(seed_value)

    print("Welcome to Rock, Paper, Scissors!")
    user_choice = get_user_choice()
    computer_choice = get_computer_choice()

    print("User choice:", user_choice)
    print("Computer choice:", computer_choice)

    result = compare_choices(user_choice, computer_choice)
    print(result)

    play_again = input("Do you want to play again? (yes/no) ")
    if play_again.lower() == "yes":
        play_game()
    else:
        print("Goodbye!")

def get_user_choice(user_choice=None):
    if user_choice is None:
        user_choice = input("Enter rock, paper, or scissors: ")
    if user_choice.lower() in ["rock", "paper", "scissors"]:
        return user_choice.lower()
    else:
        raise ValueError("Invalid choice. Please try again.")

def get_computer_choice():
    return random.choice(["rock", "paper", "scissors"])

def compare_choices(user_choice, computer_choice):
    valid_choices = ['rock', 'paper', 'scissors']
    if user_choice not in valid_choices or computer_choice not in valid_choices:
        return "I don't understand that!"
    elif user_choice == computer_choice:
        return "It's a tie!"
    elif user_choice == "rock":
        if computer_choice == "paper":
            return f"You lose! {computer_choice} covers {user_choice}"
        else:
            return f"You win! {user_choice} smashes {computer_choice}"
    elif user_choice == "paper":
        if computer_choice == "scissors":
            return f"You lose! {computer_choice} cuts {user_choice}"
        else:
            return f"You win! {user_choice} covers {computer_choice}"
    elif user_choice == "scissors":
        if computer_choice == "rock":
            return f"You lose! {computer_choice} smashes {user_choice}"
        else:
            return f"You win! {user_choice} cuts {computer_choice}"

if __name__ == "__main__":
    play_game()