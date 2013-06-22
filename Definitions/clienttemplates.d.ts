///<reference path="SP.d.ts" />

declare module SPClientTemplates {

    export enum FileSystemObjectType {
        Invalid,
        File,
        Folder,
        Web
    }
    export enum ChoiceFormatType {
        Dropdown,
        Radio
    }

    export enum ClientControlMode {
        Invalid,
        DisplayForm,
        EditForm,
        NewForm,
        View
    }

    export enum RichTextMode {
        Compatible,
        FullHtml,
        HtmlAsXml,
        ThemeHtml
    }
    export enum UrlFormatType {
        Hyperlink,
        Image
    }

    export enum DateTimeDisplayFormat {
        DateOnly,
        DateTime,
        TimeOnly
    }

    export enum DateTimeCalendarType {
        None,
        Gregorian,
        Japan,
        Taiwan,
        Korea,
        Hijri,
        Thai,
        Hebrew,
        GregorianMEFrench,
        GregorianArabic,
        GregorianXLITEnglish,
        GregorianXLITFrench,
        KoreaJapanLunar,
        ChineseLunar,
        SakaEra,
        UmAlQura
    }
    export enum UserSelectionMode {
        PeopleOnly,
        PeopleAndGroups
    }

    /** Represents schema for a Choice field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Choice extends FieldSchema_InForm {
        /** List of choices for this field. */
        Choices: string[];
        /** Display format for the choice field */
        FormatType: ChoiceFormatType;
    }
    /** Represents schema for a Lookup field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Lookup extends FieldSchema_InForm {
        /** Specifies if the field allows multiple values */
        AllowMultipleValues: bool;
        /** Returns base url for a list display form, e.g. "http://portal/web/_layouts/15/listform.aspx?PageType=4"
            You must add "ListId" (Guid of the list) and "ID" (integer Id of the item) parameters in order to use this Url */
        BaseDisplayFormUrl: string;
        /** Indicates if the field is a dependent lookup */
        DependentLookup: bool;
        /** Indicates wherever the lookup list is throttled (contains more items than value of the "List Throttle Limit" setting). */
        Throttled: bool;
        /** Returns string representation of a number that represents the current value for the "List Throttle Limit" web application setting.
            Only appears if Throttled property is true, i.e. the target lookup list is throttled. */
        MaxQueryResult: string;
        /** List of choices for this field.
            For a lookup field, contains array of possible values pulled from the target lookup list. */
        Choices: string[];
        /** Number of choices. Appears only for Lookup field. */
        ChoiceCount: number;
    }
    /** Represents schema for a DateTime field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_DateTime extends FieldSchema_InForm {
        /** Type of calendar to use */
        CalendarType: DateTimeCalendarType;
        /** Display format for DateTime field. */
        DisplayFormat: DateTimeDisplayFormat;
        /** Indicates wherever current user regional settings specify to display week numbers in day or week views of a calendar.
            Only appears for DateTime fields. */
        ShowWeekNumber: bool;
        TimeSeparator: string;
        TimeZoneDifference: string;
        FirstDayOfWeek: number;
        FirstWeekOfYear: number;
        HijriAdjustment: number;
        WorkWeek: string;
        LocaleId: string;
        LanguageId: string;
        MinJDay: number;
        MaxJDay: number;
        HoursMode24: bool;
        HoursOptions: string[];
    }
    /** Represents schema for a DateTime field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Geolocation extends FieldSchema_InForm {
        BingMapsKey: string;
        IsBingMapBlockedInCurrentRegion: bool;
    }
    /** Represents schema for a Choice field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_MultiChoice extends FieldSchema_InForm {
        /** List of choices for this field. */
        MultiChoices: string[];
        /** Indicates wherever fill-in choice is allowed */
        FillInChoice: bool;
    }
    /** Represents schema for a Choice field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_MultiLineText extends FieldSchema_InForm {
        /** Specifies whether rich text formatting can be used in the field */
        RichText: bool;
        /** Changes are appended to the existing text. */
        AppendOnly: bool;
        /** Rich text mode for the field */
        RichTextMode: RichTextMode;
        /** Number of lines configured to display */
        NumberOfLines: number;
        /** A boolean value that specifies whether hyperlinks can be used in this fields. */
        AllowHyperlink: bool;
        /** WebPartAdderId for the ScriptEditorWebPart */
        ScriptEditorAdderId: string;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Number extends FieldSchema_InForm {
        ShowAsPercentage: bool;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Text extends FieldSchema_InForm {
        MaxLength: number;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Url extends FieldSchema_InForm {
        DisplayFormat: UrlFormatType;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_User extends FieldSchema_InForm {
        Presence: bool;
        WithPicture: bool;
        DefaultRender: bool;
        WithPictureDetail: bool;
        /** Server relative Url for ~site/_layouts/listform.aspx */
        ListFormUrl: string;
        /** Server relative Url for ~site/_layouts/userdisp.aspx */
        UserDisplayUrl: string;
        EntitySeparator: string;
        PictureOnly: bool;
        PictureSize: string;
    }
    /** Represents field schema in Grid mode and on list forms.
        Consider casting objects of this type to more specific field types, e.g. FieldSchemaInForm_Lookup */
    export interface FieldSchema_InForm {
        /** Specifies if the field can be edited while list view is in the Grid mode */
        AllowGridEditing: bool;
        /** Description for this field. */
        Description: string;
        /** Direction of the reading order for the field. */
        Direction: string;
        /** String representation of the field type, e.g. "Lookup". Same as SPField.TypeAsString */
        FieldType: string;
        /** Indicates whether the field is hidden */
        Hidden: bool;
        /** Guid of the field */
        Id: string;
        /** Specifies Input Method Editor (IME) mode bias to use for the field.
            The IME enables conversion of keystrokes between languages when one writing system has more characters than can be encoded for the given keyboard. */
        IMEMode: any;
        /** Internal name of the field */
        Name: string;
        /** Specifies if the field is read only */
        ReadOnlyField: bool;
        /** Specifies wherever field requires values */
        Required: bool;
        RestrictedMode: bool;
        /** Title of the field */
        Title: string;
        /** For OOTB fields, returns the type of field. For "UserMulti" returns "User", for "LookupMulti" returns "Lookup".
            For custom field types, returns base type of the field. */
        Type: string;
        /** If SPFarm.Local.UseMinWidthForHtmlPicker is true, UseMinWidth will be set to true. Undefined in other cases. */
        UseMinWidth: bool;
    }
    export interface ListSchema_InForm {
        Field: FieldSchema_InForm[];
    }
    export interface ListData_InForm {
        Items: Item[];
    }
    export interface RenderContext_FieldInForm extends RenderContext_Form {
        CurrentGroupIdx: number;
        CurrentGroup: Group;
        CurrentItems: Item[];
        CurrentFieldSchema: FieldSchema_InForm;
        CurrentFieldValue: any;
    }
    export interface RenderContext_Form extends RenderContext {
        CurrentItem: Item;
        FieldControlsModes: { [fieldInternalName: string]: ClientControlMode; };
        FormContext: ClientFormContext;
        FormUniqueId: string;
        ListData: ListData_InForm;
        ListSchema: ListSchema_InForm;
    }



    export interface FieldSchema_InView_LookupField extends FieldSchema_InView {
        /** Either "TRUE" or "FALSE" */
        AllowMultipleValues: string;
        /** Target lookup list display form URL, including PageType and List attributes. */
        DispFormUrl: string;
        /** Either "TRUE" or "FALSE" */
        HasPrefix: string;
    }
    export interface FieldSchema_InView_UserField extends FieldSchema_InView {
        /** Either "TRUE" or "FALSE" */
        AllowMultipleValues: string;
        /** Either "TRUE" or "FALSE" */
        ImnHeader: string;
        /** Either "TRUE" or "FALSE" */
        HasPrefix: string;
        /** Either "1" or "0" */
        HasUserLink: string;
        /** Either "1" or "0" */
        DefaultRender: string;
    }
    /** Represents field schema in a list view. */
    export interface FieldSchema_InView {
        /** Either "TRUE" or "FALSE" */
        AllowGridEditing: string;
        /** Either "TRUE" or "FALSE" */
        CalloutMenu: string;
        ClassInfo: string; // e.g. "Menu"
        css: string;
        DisplayName: string;
        /** Either "TRUE" or "FALSE" */
        Explicit: string;
        fieldRenderer: any;
        FieldTitle: string;
        /** Represents SPField.TypeAsString, e.g. "Computed", "UserMulti", etc. */
        FieldType: string;
        /** Indicates whether the field can be filtered. Either "TRUE" or "FALSE" */
        Filterable: string;
        /** Set to "TRUE" for fields that comply to the following Xpath query:
            ViewFields/FieldRef[@Explicit='TRUE'] | Query/GroupBy/FieldRef[not(@Name=ViewFields/FieldRef/@Name)] */
        GroupField: string;
        /** Either "TRUE" or "FALSE" */
        GridActiveAndReadOnly: string;
        /** Guid of the field */
        ID: string;
        /** Specifies if the field contains list item menu.
            Corresponds to ViewFields/FieldRef/@ListItemMenu attribute. Either "TRUE" or "FALSE" and might be missing. */
        listItemMenu: string;
        Name: string;
        RealFieldName: string;
        /** Either "TRUE" or "FALSE" */
        ReadOnly: string;
        ResultType: string;
        /** Indicates whether the field can be sorted. Either "TRUE" or "FALSE" */
        Sortable: string;
        Type: string;
    }
    export interface ListSchema_InView {
        /** Key-value object that represents all aggregations defined for the view.
            Key specifies the field internal name, and value specifies the type of the aggregation. */
        Aggregate: { [name: string]: string; };
        /** Either "TRUE" or false (for grouping) */
        Collapse: string;
        /** Specifies whether to open items in a client application ("1") or in browser ("0"). */
        DefaultItemOpen: string;
        Direction: string;
        /** Either "0" or "1" */
        EffectivePresenceEnabled: string;
        /** If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm[], otherwise cast to FieldSchema_InView[] */
        Field: any[];
        FieldSortParam: string;
        Filter: any;
        /** Either "0" or "1" */
        ForceCheckout: string;
        /** Internal name for the first group by field, if any */
        group1: string;
        /** Internal name for the second group by field, if any */
        group2: string;
        /** "1" if the view contains "Title" field, otherwise not defined. */
        HasTitle: string;
        HttpVDir: string;
        /** Either "0" or "1" */
        InplaceSearchEnabled: string;
        /** Either "0" or "1" */
        IsDocLib: string;
        /** e.g. "1033" */
        LCID: string;
        /** Either "0" or "1" */
        ListRight_AddListItems: string;
        NoListItem: string;
        NoListItemHowTo: string;
        /** Server-relative path to the current page */
        PagePath: string;
        /** Internal name of the field inside which the hierarchy buttons are displayed */
        ParentHierarchyDisplayField: string;
        PresenceAlt: string;
        /** Represents SPList.RootFolder.Properties. Exists only if SPList.FetchPropertyBagForListView property is set to true. */
        PropertyBag: { [key: string]: string; };
        /** Either "True" or "False" */
        RenderSaveAsNewViewButton: string;
        /** Either "True" or "False" */
        RenderViewSelectorPivotMenu: string;
        /** Either "True" or "False" */
        RenderViewSelectorPivotMenuAsync: string;
        /** Query string parameters that specify GUID of the current view and the current root folder */
        RootFolderParam: string;
        SelectedID: string; // number
        ShowWebPart: string;
        /** Either "1" or undefined. */
        StrikeThroughOnCompletedEnabled: string;
        /** Either "0" or "1" */
        TabularView: string;
        Toolbar: string;
        UIVersion: string; // number
        Userid: string; // number
        UserVanilla: any;
        /** Server relative path to "/_layouts/userdisp.aspx" in the current web */
        UserDispUrl: string;
        /** Either "1" or "" */
        UseParentHierarchy: string;
        /** Guid of the view */
        View: string;
        /** JSON string */
        ViewSelectorPivotMenuOptions: string;
        /** Query string parameters that specify current root folder (RootFolder) and folder content type id (FolderCTID) */
        ViewSelector_ViewParameters: string;
    }
    export interface ListData_InView {
        FilterLink: string;
        FilterFields: string;
        FirstRow: number;
        /** Either "0" or "1" */
        ForceNoHierarchy: string;
        HierarchyHasIndention: string;
        /** Link to the previous page (not defined if not available) */
        PrevHref: string;
        /** Link to the next page  (not defined if not available) */
        NextHref: string;
        SortField: string;
        SortDir: string;
        LastRow: number;
        Row: Item[];
    }
    export interface RenderContext_GroupInView extends RenderContext_InView {
        CurrentGroupIdx: number;
        CurrentGroup: Group;
        CurrentItems: Item[];
    }
    export interface RenderContext_InView extends RenderContext {
        AllowCreateFolder: bool;
        AllowGridMode: bool;
        BasePermissions: { [PermissionName: string]: bool; }; // SP.BasePermissions?
        bInitialRender: bool;
        CanShareLinkForNewDocument: bool;
        CascadeDeleteWarningMessage: string;
        clvp: HTMLElement; // not in View
        ContentTypesEnabled: bool;
        ctxId: number;
        ctxType: any; // not in View
        CurrentUserId: number;
        CurrentUserIsSiteAdmin: bool;
        dictSel: any;
        /** Absolute path for the list display form */
        displayFormUrl: string;
        /** Absolute path for the list edit form */
        editFormUrl: string;
        EnableMinorVersions: bool;
        ExternalDataList: bool;
        enteringGridMode: bool;
        existingServerFilterHash: any;
        HasRelatedCascadeLists: number;
        heroId: string; // e.g. "idHomePageNewItem"
        HttpPath: string;
        HttpRoot: string;
        imagesPath: string;
        inGridFullRender: any; // not in View
        inGridMode: bool;
        IsAppWeb: bool;
        IsClientRendering: bool;
        isForceCheckout: bool;
        isModerated: bool;
        isPortalTemplate: any;
        isWebEditorPreview: number;
        isVersions: number;
        isXslView: bool;
        LastRowIndexSelected: any; // not in View
        LastSelectableRowIdx: any;
        LastSelectedItemId: any; // not in View
        leavingGridMode: bool;
        listBaseType: number;
        ListData: ListData_InView;
        ListDataJSONItemsKey: string; // ="Row"
        /** Guid of the list */
        listName: string;
        ListSchema: ListSchema_InView;
        listTemplate: string;
        ListTitle: string;
        listUrlDir: string;
        loadingAsyncData: bool;
        ModerationStatus: number;
        NavigateForFormsPages: bool;
        /** Absolute path for the list new form */
        newFormUrl: string;
        NewWOPIDocumentEnabled: any;
        NewWOPIDocumentUrl: any;
        noGroupCollapse: bool;
        OfficialFileName: string;
        OfficialFileNames: string;
        overrideDeleteConfirmation: string; // not in View
        overrideFilterQstring: string; // not in View
        PortalUrl: string;
        queryString: any;
        recursiveView: bool;
        /** either 1 or 0 */
        RecycleBinEnabled: number;
        RegionalSettingsTimeZoneBias: string;
        rootFolder: string;
        rootFolderForDisplay: any;
        RowFocusTimerID: any;
        SelectAllCbx: any;
        SendToLocationName: string;
        SendToLocationUrl: string;
        serverUrl: any;
        SiteTitle: string;
        StateInitDone: bool;
        TableCbxFocusHandler: any;
        TableMouseOverHandler: any;
        TotalListItems: any;
        verEnabled: number;
        /** Guid of the view. */
        view: string;
        viewTitle: string;
        WorkflowAssociated: bool;
        wpq: string;
        WriteSecurity: string;
    }
    export interface RenderContext_ItemInView extends RenderContext_InView {
        CurrentItem: Item;
        CurrentItemIdx: number;
    }
    export interface RenderContext_FieldInView extends RenderContext_ItemInView {
        /** If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm, otherwise cast to FieldSchema_InView */
        CurrentFieldSchema: any;
        CurrentFieldValue: any;
        FieldControlsModes: { [fieldInternalName: string]: ClientControlMode; };
        FormContext: any;
        FormUniqueId: string;
    }

    export interface Item {
        [fieldInternalName: string]: any;
    }
    export interface Group {
        Items: Item[];
    }

    export interface RenderContext {
        BaseViewID: number;
        ControlMode: ClientControlMode;
        CurrentCultureName: string;
        CurrentLanguage: number;
        CurrentSelectedItems: any;
        CurrentUICultureName: string;
        ListTemplateType: number;
        OnPostRender: any;
        OnPreRender: any;
        onRefreshFailed: any;
        RenderBody: (renderContext: RenderContext) => string;
        RenderFieldByName: (renderContext: RenderContext, fieldName: string) => string;
        RenderFields: (renderContext: RenderContext) => string;
        RenderFooter: (renderContext: RenderContext) => string;
        RenderGroups: (renderContext: RenderContext) => string;
        RenderHeader: (renderContext: RenderContext) => string;
        RenderItems: (renderContext: RenderContext) => string;
        RenderView: (renderContext: RenderContext) => string;
        SiteClientTag: string;
        Templates: TemplateOverrides;
    }

    export interface SingleTemplateCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_InView): string;
    }
    export interface GroupCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_GroupInView): string;
    }
    export interface ItemCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext): string;
    }
    export interface FieldInFormCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_FieldInForm): string;
    }
    export interface FieldInViewCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_FieldInView): string;
    }

    export interface FieldTemplateOverrides {
        /** Defines templates for rendering the field on a display form. */
        DisplayForm?: FieldInFormCallback;
        /** Defines templates for rendering the field on an edit form. */
        EditForm?: FieldInFormCallback;
        /** Defines templates for rendering the field on a new form. */
        NewForm?: FieldInFormCallback;
        /** Defines templates for rendering the field on a list view. */
        View?: FieldInViewCallback;
    }

    export interface FieldTemplateMap {
        [fieldInternalName: string]: FieldTemplateOverrides;
    }

    export interface TemplateOverrides {
        View?: (renderContext: any) => string; // TODO: determine appropriate context type and purpose of this template
        Body?: (renderContext: any) => string; // TODO: determine appropriate context type and purpose of this template 
        /** Defines templates for rendering groups (aggregations). */
        Group?: GroupCallback;
        /** Defines templates for list items rendering. */
        Item?: ItemCallback;
        /** Defines template for rendering list view header.
            Can be either string or SingleTemplateCallback */
        Header?: SingleTemplateCallback;
        /** Defines template for rendering list view footer.
            Can be either string or SingleTemplateCallback */
        Footer?: SingleTemplateCallback;
        /** Defines templates for fields rendering. The field is specified by it's internal name. */
        Fields?: FieldTemplateMap;
    }
    export interface TemplateOverridesOptions {
        /** Template overrides */
        Templates?: TemplateOverrides;

        /** �allbacks called before rendering starts. Can be function (ctx: RenderContext) => void or array of functions.*/
        OnPreRender?: any;

        /** �allbacks called after rendered html inserted into DOM. Can be function (ctx: RenderContext) => void or array of functions.*/
        OnPostRender?: any;

        /** View style (SPView.StyleID) for which the templates should be applied. 
            If not defined, the templates will be applied only to default view style. */
        ViewStyle?: number;
        /** List template type (SPList.BaseTemplate) for which the template should be applied. 
            If not defined, the templates will be applied to all lists. */
        ListTemplateType?: number;
        /** Base view ID (SPView.BaseViewID) for which the template should be applied.
            If not defined, the templates will be applied to all views. */
        BaseViewID?: number;
    }
    export class TemplateManager {
        static RegisterTemplateOverrides(renderCtx: TemplateOverridesOptions): void;
    }

    export interface ClientUserValue {
        lookupId: number;
        lookupValue: string;
        displayStr: string;
        email: string;
        sip: string;
        title: string;
        picture: string;
        department: string;
        jobTitle: string;
    }
    export interface ClientLookupValue {
        LookupId: number;
        LookupValue: string;
    }
    export interface ClientUrlValue {
        URL: string;
        Description: string;
    }
    export class Utility {
        static ComputeRegisterTypeInfo(renderCtx: TemplateOverridesOptions): any;
        static ControlModeToString(mode: SPClientTemplates.ClientControlMode): string;
        static FileSystemObjectTypeToString(fileSystemObjectType: SPClientTemplates.FileSystemObjectType): string;
        static ChoiceFormatTypeToString(fileSystemObjectType: SPClientTemplates.ChoiceFormatType): string;
        static RichTextModeToString(fileSystemObjectType: SPClientTemplates.RichTextMode): string;
        static IsValidControlMode(mode: number): bool;
        /** Removes leading and trailing spaces */
        static Trim(str: string): string;
        /** Creates SP.ClientContext based on the specified Web URL. If the SP.Runtime.js script is not loaded, returns null */
        static InitContext(webUrl: string): SP.ClientContext;
        static GetControlOptions(control: HTMLElement): any;
        static TryParseInitialUserValue(userStr: string): ClientUserValue[];
        /** Tries to resolve user names from string. Pushes either ClientUserValue (if resolved successfully) or original string (if not) to the resulting array. */
        static TryParseUserControlValue(userStr: string, separator: string): any[];
        static GetPropertiesFromPageContextInfo(context: RenderContext): void;
        /** Replaces tokens "~site/", "~sitecollection/", "~sitecollectionmasterpagegallery", "{lcid}", "{locale}" and "{siteclienttag}" with appropriate context values */
        static ReplaceUrlTokens(tokenUrl: string): string;
        static ParseLookupValue(valueStr: string): ClientLookupValue;
        static ParseMultiLookupValues(valueStr: string): ClientLookupValue[];
        /** Represents lookup values array in some strange format */
        static BuildLookupValuesAsString(choiceArray: ClientLookupValue[], isMultiLookup: bool, setGroupDesc: bool): string;
        static ParseURLValue(value: string): ClientUrlValue;
        static GetFormContextForCurrentField(context: RenderContext_Form): ClientFormContext;
    }

    export class ClientFormContext {
        fieldValue: any;
        fieldSchema: SPClientTemplates.FieldSchema_InForm;
        fieldName: string;
        controlMode: number;
        webAttributes: {
            AllowScriptableWebParts: bool;
            CurrentUserId: number;
            EffectivePresenceEnabled: bool;
            LCID: string;
            PermissionCustomizePages: bool;
            WebUrl: string;
        };
        itemAttributes: {
            ExternalListItem: boolean;
            FsObjType: number;
            Id: number;
            Url: string;
        };
        listAttributes: {
            BaseType: number;
            DefaultItemOpen: number;
            Direction: string;
            EnableVesioning: bool;
            Id: string;
        };
        registerInitCallback(fieldname: string, callback: () => void ): void;
        registerFocusCallback(fieldname: string, callback: () => void ): void;
        registerValidationErrorCallback(fieldname: string, callback: (error: any) => void ): void;
        registerGetValueCallback(fieldname: string, callback: () => any): void;
        updateControlValue(fieldname: string, value: any): void;
        registerClientValidator(fieldname: string, validator: SPClientForms.ClientValidation.ValidatorSet): void;
        registerHasValueChangedCallback(fieldname: string, callback: (eventArg?: any) => void );
    }

}

declare function GenerateIID(renderCtx: SPClientTemplates.RenderContext_ItemInView): string;
declare function GenerateIIDForListItem(renderCtx: SPClientTemplates.RenderContext_InView, listItem: SPClientTemplates.Item): string;

declare function SPFormControl_AppendValidationErrorMessage(nodeId: string, errorResult: any): void;
declare function CoreRender(template: any, context: any): string;

declare module SPClientForms {
    module ClientValidation {
        export class ValidationResult {
            constructor(hasErrors: bool, errorMsg: string);
        }

        export class ValidatorSet {
            public RegisterValidator(validator: IValidator);
        }

        export interface IValidator {
            Validate(value: any): ValidationResult;
        }

        export class RequiredValidator implements IValidator {
            Validate(value: any): ValidationResult;
        }
    }
}

