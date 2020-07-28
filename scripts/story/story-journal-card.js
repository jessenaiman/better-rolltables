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
    createJournalCard(story, name, options = {}) {
        if (!story) return;

        let data = {name: name};
        setProperty(data, "content", story);

        JournalEntry.create(data);
    }
}