# Reusable Components UI Kit (React + TypeScript)

This project provides flexible, and extensible UI component system built with React + TypeScript. Each component is designed to be reusable, accessible, and easily customizable.

## Included Components

| Component      | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| **Button**     | Button with support for icons, variants, custom styles, and size     |
| **InputField** | Labeled input/textarea with validation and state indicators          |
| **Toast**      | Context-based notification system with flexible position & style     |
| **Modal**      | Toggleable modal wrapper to display any content (forms, cards, etc.) |
| **Card**       | Basic card layout for Product, Article, or Profile display           |

## Usage Examples

```tsx
// Button with icon + custom styles
<Button styles={{color:"gray"}} icon={HiDownload} onClick={() => alert('Downloading!')}>Download</Button>

// InputField with validation
<InputField label="Email" name="email" placeholder="Enter your email" state="success" />
// You can also add any normal input props like type, value, disabled, etc.
<InputField label="Username" name="username" type="text" value="user123" disabled />

// Show a toast (using context)
const { setActiveToast } = useContext(AppContext);
<Button onClick={() => setActiveToast(prev => ({ ...prev, active: true, text: 'Saved!', status: 'success', direction: ['top', 'center'], duration: 2000 }))}>
  Show Toast
</Button>
<Toast />

// Modal usage
const { setModalIsOpen } = useContext(AppContext);
<Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
<Modal title="Product">
  <Product />
</Modal>
```

## Customization

- All components accept style props for custom CSS and you can override the main styles with the `styles` prop.
- Button supports icons from react-icons (pass the icon component).
- Toast can be positioned anywhere: try `direction={["top","center"]}`, `["bottom","right"]`, etc.
- Modal can wrap any content, including forms, cards, or even other modals.
- InputField supports all normal input props (type, value, disabled, etc.).

## Pro Tips

- Combine components for better UI, for example: show a Toast after a Modal form submit!
- Use context to control global UI state (toasts, modals) from anywhere.
- All components are fully typed with TS for safety and autocompletion.

---

yep..