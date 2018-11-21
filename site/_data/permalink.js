// Because parcel does not(now) support eleventys folder-urls we auto-flatten the file-structure using parmalink
module.exports = "/{{ page.fileSlug | replaceEmptyWithIndex | slug }}.html";
