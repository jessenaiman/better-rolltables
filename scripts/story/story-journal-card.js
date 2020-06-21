import { addRollModeToChatData } from '../core/utils.js';

export class StoryJournalCard {
    constructor(tableEntity) {
        this._tableEntity = tableEntity;
    }

    /**
     * Create a chat card to display the story string
     * @param {string} story the html string of the story to display in chat
     * @param {dictionary} options set of options, if gmOnly = true then the card will be set to shown only to GM regardless of the chat preferences
     */
    createJournalCard(story, options = {}) {
        if (!story) return;

        let storyData = {
            flavor: this._tableEntity.data.name,
            sound: "sounds/dice.wav",
            name: game.user._id,
            content: story
        }
        if (options.gmOnly) {
            storyData.whisper = [game.users.find(u => u.isGM).id];
        } else {
            addRollModeToChatData(storyData);
        }

        JournalEntry.create(storyData)
    }
}