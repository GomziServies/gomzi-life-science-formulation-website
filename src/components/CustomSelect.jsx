import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({
  id = 'requirement',
  name = 'requirement',
  value = '',
  options = [],
  placeholder = 'Select an option',
  required = false,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredValue, setHoveredValue] = useState(null);
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  // Selected option
  const selectedOption = options.find((opt) => opt.value === value);

  // Filter options based on search query
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  // Focus search input whenever dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      const timer = setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleSelect = (opt) => {
    if (onChange) {
      onChange({ target: { name, value: opt.value } });
    }
    setIsOpen(false);
    setSearchQuery('');
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchQuery('');
      if (buttonRef.current) buttonRef.current.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%' }}
      className="custom-select-wrapper"
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for HTML form validation & submission */}
      <input
        type="hidden"
        name={name}
        id={id}
        value={value}
        required={required}
      />

      {/* Select Trigger Button — matching green outline from reference image */}
      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '100%',
          padding: '0.8rem 1.15rem',
          border: '1.5px solid #99c229',
          borderRadius: '8px',
          fontFamily: 'inherit',
          fontSize: '0.975rem',
          color: selectedOption ? '#0f172a' : '#94a3b8',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          textAlign: 'left',
          outline: 'none',
          boxShadow: isOpen
            ? '0 0 0 3.5px rgba(153, 194, 41, 0.22)'
            : '0 1px 2px rgba(0, 0, 0, 0.04)',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <span
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingRight: '0.5rem',
            fontWeight: selectedOption ? 600 : 400,
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Up / Down Chevron (pointing up when open, down when closed) */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Menu Panel (Exact UI from user reference image) */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            zIndex: 100,
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow:
              '0 14px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
            padding: '0.75rem',
          }}
        >
          {/* 1. Search Box with Magnifying Glass Icon */}
          <div
            style={{
              position: 'relative',
              marginBottom: '0.65rem',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
                color: '#94a3b8',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                padding: '0.55rem 0.85rem 0.55rem 2.25rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                color: '#0f172a',
                outline: 'none',
                background: '#ffffff',
                boxSizing: 'border-box',
                transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#99c229';
                e.target.style.boxShadow = '0 0 0 2px rgba(153, 194, 41, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* 2. Options List */}
          <ul
            ref={listRef}
            id={`${id}-listbox`}
            role="listbox"
            tabIndex={-1}
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              maxHeight: '220px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {filteredOptions.length === 0 ? (
              <li
                style={{
                  padding: '0.85rem 1rem',
                  fontSize: '0.875rem',
                  color: '#94a3b8',
                  textAlign: 'center',
                }}
              >
                No options found
              </li>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                const isHovered = hoveredValue === opt.value;

                return (
                  <li
                    key={opt.value}
                    id={`${id}-option-${opt.value}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt)}
                    onMouseEnter={() => setHoveredValue(opt.value)}
                    onMouseLeave={() => setHoveredValue(null)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.925rem',
                      fontFamily: 'inherit',
                      fontWeight: isSelected ? 600 : 500,
                      // Visual States from Reference Image:
                      // - Selected: Solid vibrant brand green (#99c229) with bold white text
                      // - Hovered: Soft pastel lime green (#f0f7e6) with deep olive-green text (#4e770f)
                      // - Normal: Transparent with dark text (#0f172a)
                      background: isSelected
                        ? '#99c229'
                        : isHovered
                        ? '#f0f7e6'
                        : 'transparent',
                      color: isSelected
                        ? '#ffffff'
                        : isHovered
                        ? '#4e770f'
                        : '#0f172a',
                      transition:
                        'background-color 0.12s ease, color 0.12s ease',
                    }}
                  >
                    <span>{opt.label}</span>

                    {/* Bold white checkmark on selected item (exact match to reference) */}
                    {isSelected && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flexShrink: 0, marginLeft: '0.5rem' }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
