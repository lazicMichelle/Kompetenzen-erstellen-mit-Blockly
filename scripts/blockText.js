// umwandlung von Block zu Text
export function blockToText(workspace, blockType) {
    const blocks = workspace.getAllBlocks();
    const matchingBlocks = blocks.filter(block => block.type === blockType);

    const generatedTexts = matchingBlocks.map(block => {
        // Spezifische Logik für jeden Blocktyp
        switch (blockType) {
            case 'b_id':
                const idValue = block.getFieldValue('id_value');
                return 'ID: ' + idValue;

            // Hier kannst du weitere Cases für andere Blocktypen hinzufügen
            case 'b_lerntyp':
                const lerntypValue = block.getFieldValue('lerntyp_value');
                return lerntypValue;

            case 'b_person':
                const personValue = block.getFieldValue('person_value');
                return personValue;

            // Weitere Blocktypen können hier hinzugefügt werden

            default:
                return 'Unbekannter Blocktyp';
        }
    });

    return generatedTexts;
}