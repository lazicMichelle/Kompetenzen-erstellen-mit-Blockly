import * as getBlockText from blockText.js;


// id block
Blockly.Blocks['b_id'] = {
    init: function () {
        this.appendValueInput("id_field")
            .setCheck(null)
            .appendField("ID:")
            .appendField(new Blockly.FieldTextInput("ID eingeben"), "id_value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    canConnect: function (otherBlock) {
        console.log('Checking connection for b_id:', otherBlock.type);
        return otherBlock.type === 'b_lerntyp';
    }
};

Blockly.Blocks['b_lerntyp'] = {
    init: function () {
        this.appendValueInput("lerntyp_field")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["Kenntnis", "Kenntnis: "], ["Fertigkeit", "Fertigkeit: "], ["Kompetenz", "Kompetenz: "]]), "lerntyp_value");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['b_person'] = {
    init: function () {
        this.appendValueInput("person_field")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["Studierende", "Studierende "], ["AbsolventInnen", "AbsolventInnen "], ["Kombination beider", "Studierende/AbsolventInnen "]]), "person_value");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// toolbox
const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
        {
            'kind': 'category',
            'name': 'Start',
            'categorystyle': 'logic_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'b_id',
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Lerntyp',
            'categorystyle': 'math_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'b_lerntyp',
                },
            ],
        },
        {
            'kind': 'category',
            'name': 'Person',
            'categorystyle': 'text_category',
            'contents': [
                {
                    'kind': 'block',
                    'type': 'b_person',
                },
            ],
        },
    ],
};



// workspace und changelistener
let workspace = null;

function start() {
    console.log('Startfunktion wird aufgerufen.');
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox,
    });

    workspace.addChangeListener(event => {
        console.log('Changelistener wird aufgerufen.');

        // Beispielaufruf für den 'b_id'-Block
        const generatedTextsForId = blockToText(workspace, 'b_id');
        console.log('Generated Texts for b_id:', generatedTextsForId);

        const generatedTextsForLerntyp = blockToText(workspace, 'b_lerntyp');
        console.log('Generated Texts for b_lerntyp:', generatedTextsForLerntyp);

        const generatedTextsForPerson = blockToText(workspace, 'b_person');
        console.log('Generated Texts for b_person:', generatedTextsForLerntyp);

        const generatedTexts = generatedTextsForId + '\n' + generatedTextsForLerntyp + generatedTextsForPerson;
        document.getElementById('generatedTextContainer').value = generatedTexts;
    });
}

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