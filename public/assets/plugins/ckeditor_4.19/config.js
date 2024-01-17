/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	config.skin = 'bootstrapck';
	config.language = 'fr';
	config.removePlugins = 'easyimage, cloudservices, exportpdf';
	// config.uiColor = '#AADC6E';
	config.toolbarGroups = [
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
		{ name: 'forms', groups: ['forms'] },
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
		{ name: 'links', groups: ['links'] },
		{ name: 'insert', groups: ['insert'] },
		{ name: 'styles', groups: ['styles'] },
		{ name: 'colors', groups: ['colors'] },
		{ name: 'tools', groups: ['tools'] },
		{ name: 'others', groups: ['others'] },
		{ name: 'about', groups: ['about'] }
	];
	config.removeButtons = 'Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Language,Anchor,PageBreak,About,Save,NewPage,ExportPdf';
	config.contentsCss = 'https://fonts.googleapis.com/css2?family=Pacifico&family=Sedgwick+Ave&family=Source+Sans+Pro&display=swap';
	config.font_names = 'Source Sans Pro/Source Sans Pro;Sedgwick Ave/Sedgwick Ave;Pacifico/Pacifico;' + config.font_names;
};
