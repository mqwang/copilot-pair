import unittest
from game import get_user_choice, get_computer_choice, compare_choices

class TestGame(unittest.TestCase):

    def test_get_user_choice(self):
        self.assertEqual(get_user_choice('rock'), 'rock')
        self.assertEqual(get_user_choice('ROCK'), 'rock')
        self.assertEqual(get_user_choice('RoCk'), 'rock')
        self.assertEqual(get_user_choice('paper'), 'paper')
        self.assertEqual(get_user_choice('PAPER'), 'paper')
        self.assertEqual(get_user_choice('PaPeR'), 'paper')
        self.assertEqual(get_user_choice('scissors'), 'scissors')
        self.assertEqual(get_user_choice('SCISSORS'), 'scissors')
        self.assertEqual(get_user_choice('ScIsSoRs'), 'scissors')
        with self.assertRaises(ValueError):
            get_user_choice('invalid')

    def test_get_computer_choice(self):
        self.assertIn(get_computer_choice(), ['rock', 'paper', 'scissors'])

    def test_compare_choices(self):
        self.assertEqual(compare_choices('rock', 'rock'), "It's a tie!")
        self.assertEqual(compare_choices('rock', 'scissors'), "You win! rock smashes scissors")
        self.assertEqual(compare_choices('rock', 'paper'), "You lose! paper covers rock")
        self.assertEqual(compare_choices('paper', 'rock'), "You win! paper covers rock")
        self.assertEqual(compare_choices('paper', 'scissors'), "You lose! scissors cuts paper")
        self.assertEqual(compare_choices('scissors', 'rock'), "You lose! rock smashes scissors")
        self.assertEqual(compare_choices('scissors', 'paper'), "You win! scissors cuts paper")
        self.assertEqual(compare_choices('invalid', 'rock'), "I don't understand that!")
        self.assertEqual(compare_choices('rock', 'invalid'), "I don't understand that!")
        self.assertEqual(compare_choices('invalid', 'invalid'), "I don't understand that!")

if __name__ == '__main__':
    unittest.main()