import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string;
}

export interface CustomSelectChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

interface CustomSelectProps {
  id?: string;
  name: string;
  value?: string;
  onChange: (e: any) => void;
  options: (SelectOption | string)[];
  placeholder?: string;
  error?: boolean | string;
  className?: string;
  disabled?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  name,
  value = '',
  onChange,
  options,
  placeholder = 'Select an option',
  error,
  className = '',
  disabled = false,
}) => {
  const generatedId = useId();
  const selectId = id || generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionsListRef = useRef<HTMLDivElement>(null);

  // Normalize options to SelectOption[]
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  );

  // Filter options if searchQuery is present
  const filteredOptions = normalizedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens (if option count > 8)
  useEffect(() => {
    if (isOpen && normalizedOptions.length > 8 && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, normalizedOptions.length]);

  const handleSelect = (optionValue: string) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      if (!isOpen) {
        e.preventDefault();
        setIsOpen(true);
      } else if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
        e.preventDefault();
        handleSelect(filteredOptions[focusedIndex].value);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchQuery('');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setFocusedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : filteredOptions.length - 1));
      }
    }
  };

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && optionsListRef.current) {
      const optionElements = optionsListRef.current.querySelectorAll('[role="option"]');
      if (optionElements[focusedIndex]) {
        optionElements[focusedIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex]);

  const hasError = Boolean(error);

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Hidden input for agentic browsing, form serialization, and automated testing */}
      <input
        type="hidden"
        name={name}
        value={value}
        data-testid={`select-${name}`}
      />

      {/* Select Trigger Button */}
      <button
        type="button"
        id={selectId}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${selectId}-listbox`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`w-full rounded-lg border text-left flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm transition-all duration-200 outline-none bg-white ${
          hasError
            ? 'border-red-400 bg-red-50/20 text-slate-800'
            : isOpen
            ? 'border-[#15803d] ring-2 ring-[#15803d]/15 text-slate-900'
            : 'border-slate-300 hover:border-slate-400 text-slate-800'
        } ${disabled ? 'opacity-60 cursor-not-allowed bg-slate-50' : 'cursor-pointer'}`}
      >
        <span className={`block truncate ${!selectedOption ? 'text-slate-400' : 'text-slate-800 font-medium'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#15803d]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Overlay */}
      {isOpen && (
        <div
          className="absolute z-50 left-0 right-0 mt-1 bg-white rounded-xl border border-[#dce8da] shadow-xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150"
          style={{ minWidth: '100%' }}
        >
          {/* Search box if > 8 options */}
          {normalizedOptions.length > 8 && (
            <div className="p-2 border-b border-slate-100 bg-[#f9fcf8] flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-[#15803d] shrink-0 ml-1.5" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full text-xs bg-transparent outline-none py-1 text-slate-800 placeholder:text-slate-400"
              />
            </div>
          )}

          {/* Options List */}
          <div
            id={`${selectId}-listbox`}
            ref={optionsListRef}
            role="listbox"
            aria-labelledby={selectId}
            tabIndex={-1}
            className="max-h-60 overflow-y-auto py-1 custom-dropdown-scrollbar"
          >
            {/* Placeholder option (Select ...) */}
            {placeholder && !searchQuery && (
              <div
                role="option"
                aria-selected={!value}
                onClick={() => handleSelect('')}
                className={`px-3.5 py-2 text-xs sm:text-sm cursor-pointer transition-colors duration-150 flex items-center justify-between text-slate-400 hover:bg-[#f0f7f2] hover:text-slate-600 ${
                  !value ? 'bg-[#f4f9f4] font-medium text-[#15803d]' : ''
                }`}
              >
                <span>{placeholder}</span>
                {!value && <Check className="w-4 h-4 text-[#15803d]" />}
              </div>
            )}

            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-xs text-slate-500 text-center italic">
                No matching options
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = option.value === value;
                const isFocused = index === focusedIndex;

                return (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => setFocusedIndex(index)}
                    className={`px-3.5 py-2.5 text-xs sm:text-sm cursor-pointer transition-all duration-150 flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#15803d] text-white font-semibold'
                        : isFocused
                        ? 'bg-[#f0f7f2] text-[#15803d] font-medium'
                        : 'text-slate-700 hover:bg-[#f0f7f2] hover:text-[#15803d]'
                    }`}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-white shrink-0 ml-2 stroke-[2.5]" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
